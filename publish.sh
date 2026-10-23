#!/usr/bin/env bash
# publish.sh - get the portfolio ready for `git push`
#
#   ./publish.sh                       build + check + stage (no commit)
#   ./publish.sh -m "message"          ...and commit
#   ./publish.sh -m "message" --push   ...and push the current branch
#
# Run it from the project root (the folder that has Cargo.toml).

set -euo pipefail
cd "$(dirname "$0")"

LIMIT=$((90 * 1024 * 1024))   # GitHub rejects files over 100 MB; stop at 90 MB
MSG=""
PUSH=0

# ---------- helpers ----------
if [ -t 1 ]; then G=$'\033[32m'; Y=$'\033[33m'; R=$'\033[31m'; B=$'\033[1m'; N=$'\033[0m'; else G=""; Y=""; R=""; B=""; N=""; fi
step() { printf '\n%s==> %s%s\n' "$B" "$1" "$N"; }
ok()   { printf '  %s✔%s %s\n' "$G" "$N" "$1"; }
warn() { printf '  %s!%s %s\n' "$Y" "$N" "$1"; }
fail() { printf '  %s✘ %s%s\n' "$R" "$1" "$N"; exit 1; }

usage() {
  sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//'
  exit 0
}

# Download the standalone Tailwind CLI as ./tw if it is missing
ensure_tw() {
  if [ -x ./tw ]; then return 0; fi
  command -v curl >/dev/null || fail "./tw is missing and curl is not installed"
  local os arch asset
  case "$(uname -s)" in
    Linux)  os=linux ;;
    Darwin) os=macos ;;
    *)      fail "./tw is missing and this OS is not supported by the auto-download" ;;
  esac
  case "$(uname -m)" in
    x86_64|amd64)  arch=x64 ;;
    aarch64|arm64) arch=arm64 ;;
    *)             fail "./tw is missing and this CPU type is not supported by the auto-download" ;;
  esac
  asset="tailwindcss-$os-$arch"
  warn "./tw not found - downloading $asset (about 100 MB)"
  curl -fL --progress-bar -o tw "https://github.com/tailwindlabs/tailwindcss/releases/latest/download/$asset" \
    || { rm -f tw; fail "download failed - check your internet connection"; }
  chmod +x tw
  ./tw --help >/dev/null 2>&1 || { rm -f tw; fail "the downloaded ./tw does not run"; }
  ok "downloaded ./tw"
}

# ---------- arguments ----------
while [ $# -gt 0 ]; do
  case "$1" in
    -m|--message) MSG="${2:-}"; [ -n "$MSG" ] || fail "-m needs a commit message"; shift 2 ;;
    --push)       PUSH=1; shift ;;
    -h|--help)    usage ;;
    *)            fail "unknown option: $1 (try --help)" ;;
  esac
done
if [ "$PUSH" -eq 1 ] && [ -z "$MSG" ]; then fail "--push needs a commit message: ./publish.sh -m \"message\" --push"; fi

# ---------- 0. sanity ----------
step "Checking the project"
[ -f Cargo.toml ]               || fail "Cargo.toml not found - run this from the project root"
git rev-parse --git-dir >/dev/null 2>&1 || fail "this folder is not a git repository"
command -v cargo >/dev/null     || fail "cargo is not installed or not on PATH"
[ -f tailwind/input.css ]       || fail "tailwind/input.css not found"
ensure_tw
BRANCH="$(git branch --show-current)"
[ -n "$BRANCH" ] || fail "no branch checked out (detached HEAD) - run: git checkout <your-branch>"
ok "git branch: $BRANCH"

# ---------- 1. .gitignore: keep the 100 MB tw binary out of git ----------
step "Protecting the repository"
touch .gitignore
for pat in "target/" "tw" "tw.exe"; do
  if ! grep -qxF "$pat" .gitignore; then
    echo "$pat" >> .gitignore
    ok "added '$pat' to .gitignore"
  fi
done
if git ls-files --error-unmatch tw >/dev/null 2>&1; then
  git rm --cached -q tw
  ok "stopped tracking the tw binary"
else
  ok "tw binary is not tracked"
fi
# dist/ must be committed: Vercel serves it
if grep -qE '^/?dist/?$' .gitignore; then
  fail "dist/ is listed in .gitignore, but Vercel needs it committed. Remove that line and run again."
fi
ok "dist/ is not ignored"

# ---------- 2. content warnings ----------
step "Looking for leftovers"
if grep -rqE 'YOUR_(PUBLIC_KEY|SERVICE_ID|TEMPLATE_ID)' templates 2>/dev/null; then
  warn "contact form still has EmailJS placeholders (YOUR_PUBLIC_KEY / YOUR_SERVICE_ID / YOUR_TEMPLATE_ID) in templates/partials/contact.html"
else
  ok "EmailJS values are filled in"
fi
TODOS=$(grep -c 'TODO' src/data.rs 2>/dev/null || true)
if [ "${TODOS:-0}" -gt 0 ]; then warn "src/data.rs still has $TODOS TODO comment(s)"; else ok "no TODOs in src/data.rs"; fi

# ---------- 3. build CSS ----------
step "Building Tailwind CSS"
mkdir -p static/css
./tw -i tailwind/input.css -o static/css/output.css --minify
SIZE=$(wc -c < static/css/output.css)
if [ "$SIZE" -lt 5000 ]; then
  warn "output.css is only $SIZE bytes - Tailwind may not be finding your templates (check @source in tailwind/input.css)"
else
  ok "static/css/output.css ($((SIZE / 1024)) KB)"
fi

# ---------- 4. build the static site (also compiles every template) ----------
step "Building the static site"
cargo run --quiet -- build
[ -s dist/index.html ]                || fail "dist/index.html was not created"
[ -s dist/static/css/output.css ]     || fail "dist/static/css/output.css is missing"
ok "dist/index.html ($(( $(wc -c < dist/index.html) / 1024 )) KB)"
grep -q 'effects.js' dist/index.html  && ok "effects.js is linked" || warn "dist/index.html does not load effects.js (add the <script> line to templates/base.html)"
[ -s dist/static/js/effects.js ]      && ok "dist/static/js/effects.js is present" || warn "static/js/effects.js is missing from dist"

# ---------- 5. large file protection ----------
step "Checking for files GitHub would reject"
BIG=0
while IFS= read -r -d '' f; do
  [ -f "$f" ] || continue
  s=$(wc -c < "$f")
  if [ "$s" -gt "$LIMIT" ]; then printf '  %stoo big:%s %s (%s MB)\n' "$R" "$N" "$f" "$((s / 1024 / 1024))"; BIG=1; fi
done < <(git ls-files -z --modified --others --exclude-standard)
[ "$BIG" -eq 0 ] || fail "remove or ignore the file(s) above, then run again"
ok "no oversized files in your changes"

# ---------- 6. stage ----------
step "Staging changes"
git add -A

# Large blobs hiding in commits that are not on GitHub yet (this is what blocked the earlier push)
OLD_BIG=""
if git rev-parse --verify -q HEAD >/dev/null; then
  OLD_BIG=$(git rev-list --objects HEAD --not --remotes 2>/dev/null \
    | git cat-file --batch-check='%(objecttype) %(objectsize) %(rest)' \
    | awk -v lim="$LIMIT" '$1=="blob" && $2>lim {printf "  %s (%d MB)\n", $3, $2/1048576}')
fi
if [ -n "$OLD_BIG" ]; then
  printf '%s\n' "$OLD_BIG"
  fail "an unpushed commit contains the file(s) above. Fix: git reset --soft origin/$BRANCH   then run ./publish.sh -m \"message\" again"
fi
ok "no oversized files in unpushed commits"

if git diff --cached --quiet; then
  ok "nothing new to commit - the working tree matches the last commit"
else
  git status --short
  echo
  git diff --cached --shortstat
fi

# ---------- 7. commit / push ----------
if [ -n "$MSG" ]; then
  step "Committing"
  if git diff --cached --quiet; then
    warn "nothing staged, so no commit was created"
  else
    git commit -q -m "$MSG"
    ok "committed: $MSG"
  fi
fi

if [ "$PUSH" -eq 1 ]; then
  step "Pushing $BRANCH"
  git push -u origin "$BRANCH"
  ok "pushed - Vercel will redeploy shortly"
elif [ -n "$MSG" ]; then
  printf '\nReady. Push with:  git push -u origin %s\n' "$BRANCH"
else
  printf '\nReady. Commit with:  ./publish.sh -m "your message"   (add --push to push as well)\n'
fi