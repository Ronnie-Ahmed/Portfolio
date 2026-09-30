(function () {
  "use strict";

  // Respect users who ask for less motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function $(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function addClass(name) { return function (el) { el.classList.add(name); }; }

  /* ------------------------------------------------------------------
   * 1. Auto-apply 3D helpers to the existing markup (no template edits)
   * ------------------------------------------------------------------ */

  // Which elements tilt, and how much (max degrees)
  var TILT = [
    ["#aboutme dl > div", 12],
    ["#aboutme img[src*='Raisul_Photo']", 12],
    ["#experience li > div", 3],
    ["#work article", 6],
    ["#skills .grid > div", 6],
    ["#services .grid > div", 8],
    ["#contactme .space-y-4 > *", 6]
  ];
  TILT.forEach(function (pair) {
    $(pair[0]).forEach(function (el) {
      if (!el.hasAttribute("data-tilt")) el.setAttribute("data-tilt", pair[1]);
    });
  });

  // Layers that float above their card
  $("#services [data-tilt] > div:first-child").forEach(addClass("depth"));
  $("#services [data-tilt] h3, #skills [data-tilt] h3, #aboutme dl dt").forEach(addClass("depth-sm"));

  // Project screenshots, skill chips, social icons, hero title
  $("#work article img").forEach(addClass("parallax-img"));
  $("#skills span.inline-flex").forEach(addClass("chip-3d"));
  $("#aboutme a[aria-label], footer a[aria-label]").forEach(addClass("spin-y"));
  $("#aboutme h1").forEach(addClass("title-3d"));

  // Orange call-to-action buttons become raised 3D buttons
  $("a, button").forEach(function (el) {
    var tokens = typeof el.className === "string" ? el.className.split(/\s+/) : [];
    if (tokens.indexOf("bg-orange-400") !== -1) el.classList.add("btn-3d");
  });

  // Two orbit rings around the profile photo
  var photo = document.querySelector("#aboutme img[src*='Raisul_Photo']");
  if (photo && !photo.parentElement.classList.contains("scene")) {
    var wrap = document.createElement("div");
    wrap.className = "scene relative";
    photo.parentElement.insertBefore(wrap, photo);
    ["orbit orbit-a", "orbit orbit-b"].forEach(function (cls) {
      var ring = document.createElement("span");
      ring.className = cls;
      ring.setAttribute("aria-hidden", "true");
      wrap.appendChild(ring);
    });
    wrap.appendChild(photo);
  }

  // Cards flip in when a project filter shows them again
  if ("MutationObserver" in window) {
    var flipObserver = new MutationObserver(function (records) {
      records.forEach(function (m) {
        var el = m.target;
        if (m.oldValue && /(^|\s)hidden(\s|$)/.test(m.oldValue) && !el.classList.contains("hidden")) {
          el.classList.remove("flip-in");
          void el.offsetWidth; // restart the animation
          el.classList.add("flip-in");
        }
      });
    });
    $("#work article").forEach(function (el) {
      flipObserver.observe(el, { attributes: true, attributeFilter: ["class"], attributeOldValue: true });
    });
  }

  /* ------------------------------------------------------------------
   * 2. Pointer effects: card tilt + hero title follows the mouse
   * ------------------------------------------------------------------ */
  if (finePointer) {
    $("[data-tilt]").forEach(function (el) {
      var max = parseFloat(el.getAttribute("data-tilt")) || 8;

      el.addEventListener("pointerenter", function () {
        el.style.transition =
          "transform 150ms ease-out, translate 300ms ease, border-color 300ms ease";
      });

      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;

        el.style.transform =
          "perspective(900px) rotateX(" + (-y * max).toFixed(2) + "deg) " +
          "rotateY(" + (x * max).toFixed(2) + "deg) scale3d(1.02, 1.02, 1.02)";

        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
        el.style.setProperty("--gx", ((x + 0.5) * 100).toFixed(1) + "%");
        el.style.setProperty("--gy", ((y + 0.5) * 100).toFixed(1) + "%");
      });

      el.addEventListener("pointerleave", function () {
        el.style.transition =
          "transform 500ms ease, translate 300ms ease, border-color 300ms ease";
        el.style.transform = "";
        el.style.setProperty("--mx", "0");
        el.style.setProperty("--my", "0");
      });
    });

    var hero = document.getElementById("aboutme");
    var title = hero && hero.querySelector("h1");
    if (hero && title) {
      title.style.transition = "transform 200ms ease-out";
      hero.addEventListener("pointermove", function (e) {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        title.style.transform =
          "perspective(900px) rotateY(" + (x * 8).toFixed(2) + "deg) rotateX(" + (-y * 6).toFixed(2) + "deg)";
      });
      hero.addEventListener("pointerleave", function () { title.style.transform = ""; });
    }
  }

  /* ------------------------------------------------------------------
   * 3. Section headings flip up into place as you scroll
   * ------------------------------------------------------------------ */
  var heads = $("main section h2").map(function (h) { return h.parentElement; });
  heads.forEach(function (el) { el.style.transformOrigin = "50% 100%"; });

  function updateHeads() {
    var vh = window.innerHeight;
    heads.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      var p = Math.min(1, Math.max(0, (vh * 0.92 - top) / (vh * 0.32)));
      el.style.opacity = p.toFixed(3);
      el.style.transform = p >= 1
        ? ""
        : "perspective(700px) rotateX(" + ((1 - p) * 40).toFixed(1) + "deg) translateY(" + ((1 - p) * 24).toFixed(1) + "px)";
    });
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { updateHeads(); ticking = false; });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("load", updateHeads);
  updateHeads();

  /* ------------------------------------------------------------------
   * 4. Full-page 3D background (Three.js): a chain of blocks in the hero,
   *    then wireframe shapes you fly past as you scroll.
   * ------------------------------------------------------------------ */
  var oldHero = document.getElementById("hero-3d"); // replaced by the full-page canvas
  if (oldHero) oldHero.remove();

  if (window.matchMedia("(max-width: 639px)").matches) return;       // keep phones fast
  if (navigator.deviceMemory && navigator.deviceMemory < 4) return;  // skip low-memory devices

  function start() {
    var THREE = window.THREE;
    if (!THREE) return;

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    var canvas = renderer.domElement;
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText =
      "position:fixed;inset:0;width:100%;height:100%;z-index:-10;pointer-events:none;opacity:.55";
    document.body.appendChild(canvas);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 9;

    var orange = new THREE.LineBasicMaterial({ color: 0xfb923c, transparent: true, opacity: 0.85 });
    var dim = new THREE.LineBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.45 });

    // Hero: a chain of blocks
    var chain = new THREE.Group();
    scene.add(chain);
    var box = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
    var N = 9;
    var cubes = [];
    var points = [];
    for (var i = 0; i < N; i++) {
      var pos = new THREE.Vector3(
        (i - (N - 1) / 2) * 1.6,
        Math.sin(i * 0.7) * 1.3,
        Math.cos(i * 0.7) * 1.6
      );
      var cube = new THREE.LineSegments(box, orange);
      cube.position.copy(pos);
      cube.rotation.set(i * 0.4, i * 0.3, 0);
      chain.add(cube);
      cubes.push(cube);
      points.push(pos);
    }
    chain.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), dim));

    // Below the hero: floating wireframe shapes
    var shapes = [
      box,
      new THREE.EdgesGeometry(new THREE.OctahedronGeometry(0.8)),
      new THREE.EdgesGeometry(new THREE.TetrahedronGeometry(0.9)),
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.8))
    ];
    var floaters = [];
    for (var j = 0; j < 46; j++) {
      var f = new THREE.LineSegments(shapes[j % 4], j % 3 === 0 ? orange : dim);
      f.position.set((Math.random() - 0.5) * 24, 2 - Math.random() * 26, -1 - Math.random() * 9);
      f.scale.setScalar(0.5 + Math.random() * 1.2);
      f.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      f.userData.spin = 0.002 + Math.random() * 0.004;
      scene.add(f);
      floaters.push(f);
    }

    function resize() {
      var w = window.innerWidth;
      var h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      chain.scale.setScalar(Math.min(1, camera.aspect / 1.6));
    }
    resize();
    window.addEventListener("resize", resize);

    // Scroll progress (0 at top, 1 at bottom) drives the camera
    var t = 0;
    function readScroll() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      t = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    }
    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll);

    // Mouse parallax
    var mx = 0;
    var my = 0;
    window.addEventListener(
      "pointermove",
      function (e) {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      },
      { passive: true }
    );

    function tick() {
      requestAnimationFrame(tick);
      if (document.hidden) return;

      chain.rotation.y += 0.0025;
      cubes.forEach(function (c, k) {
        c.rotation.x += 0.004 + k * 0.0004;
        c.rotation.y += 0.003;
      });
      floaters.forEach(function (s) {
        s.rotation.x += s.userData.spin;
        s.rotation.y += s.userData.spin * 1.3;
      });

      camera.position.x += (mx * 1.2 - camera.position.x) * 0.04;
      camera.position.y += (-t * 22 - my * 0.6 - camera.position.y) * 0.06;
      camera.lookAt(0, camera.position.y, 0);
      renderer.render(scene, camera);
    }
    tick();
  }

  // Load Three.js lazily so it never blocks the first paint
  function loadThree() {
    var s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.onload = start;
    document.head.appendChild(s);
  }
  if ("requestIdleCallback" in window) requestIdleCallback(loadThree);
  else setTimeout(loadThree, 500);
})();