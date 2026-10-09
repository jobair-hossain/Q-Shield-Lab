// Q-SHIELD Lab — shared site behavior: mobile nav toggle, scroll reveal, footer year.
(function () {
  document.documentElement.classList.add('js');

  var toggle = document.querySelector('.sidebar-toggle');
  var topnav = document.querySelector('.topnav');
  if (toggle && topnav) {
    toggle.addEventListener('click', function () {
      var open = topnav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    topnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        topnav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Use the official, UCA-hosted academic logo when available.
  // If the external image cannot load, retain a readable university-name fallback.
  document.querySelectorAll('.sidebar-affiliation-mark').forEach(function (mark) {
    var logo = mark.querySelector('img');
    if (!logo) return;
    var update = function () {
      mark.classList.toggle('has-official-logo', logo.naturalWidth > 0);
    };
    logo.addEventListener('load', update);
    logo.addEventListener('error', update);
    if (logo.complete) update();
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    // Safety net: some browsers/contexts (privacy modes, background tabs,
    // very tall targets) can fail to fire the observer at all — never let
    // content stay permanently invisible.
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }, 1200);
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
