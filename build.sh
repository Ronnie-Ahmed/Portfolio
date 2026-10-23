#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

mkdir -p static/css
./tw -i tailwind/input.css -o static/css/output.css --minify
cargo run --quiet -- build