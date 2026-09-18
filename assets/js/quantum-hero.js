// Q-SHIELD Lab — interactive "quantum field" hero background.
// A lightweight canvas particle network: nodes drift like qubits in
// superposition, link into an entangled graph when close together, and
// respond to the visitor's cursor as a temporary field source.
(function () {
  var canvas = document.querySelector('.hero-canvas');
  if (!canvas || !canvas.getContext) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ctx = canvas.getContext('2d');
  var width, height, dpr;
  var particles = [];
  var pointer = { x: null, y: null, active: false };
  var linkFlash = 0;
  var raf;

  var CYAN = [56, 224, 255];
  var VIOLET = [139, 92, 246];

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildParticles();
  }

  function buildParticles() {
    var count = Math.round((width * height) / 15000);
    count = Math.max(28, Math.min(count, 90));
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.18, 0.18),
        vy: rand(-0.14, 0.14),
        r: rand(1.1, 2.6),
        pulse: rand(0, Math.PI * 2),
        entangled: Math.random() < 0.14
      });
    }
  }

  function lerpColor(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }

  function step(t) {
    ctx.clearRect(0, 0, width, height);
    var linkDist = Math.min(150, Math.max(90, width / 9));

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.02;

      if (pointer.active) {
        var dx = p.x - pointer.x, dy = p.y - pointer.y;
        var d2 = dx * dx + dy * dy;
        var influence = 140 * 140;
        if (d2 < influence && d2 > 1) {
          var dist = Math.sqrt(d2);
          var force = (1 - dist / 140) * 0.55;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      if (p.x < -20) p.x = width + 20; else if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20; else if (p.y > height + 20) p.y = -20;
    }

    // links
    for (i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var a = particles[i], b = particles[j];
        var ddx = a.x - b.x, ddy = a.y - b.y;
        var dist2 = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dist2 < linkDist) {
          var alpha = (1 - dist2 / linkDist) * 0.5;
          var mix = lerpColor(CYAN, VIOLET, (Math.sin(t * 0.0003 + i) + 1) / 2);
          ctx.strokeStyle = 'rgba(' + mix[0] + ',' + mix[1] + ',' + mix[2] + ',' + alpha.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      // link to pointer
      if (pointer.active) {
        var pdx = particles[i].x - pointer.x, pdy = particles[i].y - pointer.y;
        var pdist = Math.sqrt(pdx * pdx + pdy * pdy);
        if (pdist < 170) {
          ctx.strokeStyle = 'rgba(56,224,255,' + ((1 - pdist / 170) * 0.55).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    // nodes
    for (i = 0; i < particles.length; i++) {
      var pt = particles[i];
      var glow = pt.entangled ? (Math.sin(pt.pulse) + 1) / 2 : 0.5;
      var col = lerpColor(CYAN, VIOLET, glow);
      ctx.beginPath();
      ctx.fillStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + (0.55 + glow * 0.35).toFixed(3) + ')';
      ctx.arc(pt.x, pt.y, pt.r + (pt.entangled ? glow * 1.2 : 0), 0, Math.PI * 2);
      ctx.fill();
    }

    if (pointer.active) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.arc(pointer.x, pointer.y, 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 1;
      ctx.arc(pointer.x, pointer.y, 18, 0, Math.PI * 2);
      ctx.stroke();
    }

    raf = requestAnimationFrame(step);
  }

  function onMove(e) {
    var rect = canvas.getBoundingClientRect();
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    var clientY = e.touches ? e.touches[0].clientY : e.clientY;
    pointer.x = clientX - rect.left;
    pointer.y = clientY - rect.top;
    pointer.active = true;
  }
  function onLeave() { pointer.active = false; }

  window.addEventListener('resize', resize);
  canvas.parentElement.addEventListener('mousemove', onMove);
  canvas.parentElement.addEventListener('mouseleave', onLeave);
  canvas.parentElement.addEventListener('touchmove', onMove, { passive: true });
  canvas.parentElement.addEventListener('touchend', onLeave);

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { cancelAnimationFrame(raf); }
    else if (!reduceMotion) { raf = requestAnimationFrame(step); }
  });

  resize();

  if (reduceMotion) {
    // Draw a single calm frame instead of a running animation.
    step(0);
    cancelAnimationFrame(raf);
  } else {
    raf = requestAnimationFrame(step);
  }
})();
