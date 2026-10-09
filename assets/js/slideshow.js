// Q-SHIELD Lab homepage photo slideshow.
// Add real lab photos as <figure class="lab-slide"> elements in index.html.
// A single photo stays still; controls and rotation are enabled at two or more.
(function () {
  'use strict';
  var gallery = document.querySelector('.lab-slideshow');
  if (!gallery) return;

  var slides = Array.prototype.slice.call(gallery.querySelectorAll('.lab-slide'));
  if (slides.length < 2) return;

  var controls = gallery.querySelector('.lab-slideshow-controls');
  var dotsContainer = gallery.querySelector('.lab-slideshow-dots');
  var previousButton = gallery.querySelector('.lab-slideshow-prev');
  var nextButton = gallery.querySelector('.lab-slideshow-next');
  var pauseButton = gallery.querySelector('.lab-slideshow-pause');
  var announcement = gallery.querySelector('.lab-slideshow-announcement');
  if (!controls || !dotsContainer || !previousButton || !nextButton || !pauseButton) return;

  var active = 0;
  var timer = null;
  var userPaused = false;
  var hovering = false;
  var focused = false;
  var interval = Math.max(3500, Number(gallery.getAttribute('data-interval')) || 6500);
  var motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  var dots = slides.map(function (slide, index) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'lab-slideshow-dot';
    dot.setAttribute('aria-label', 'Show photo ' + (index + 1) + ' of ' + slides.length);
    dot.addEventListener('click', function () { show(index, true); });
    dotsContainer.appendChild(dot);
    slide.setAttribute('aria-label', 'Photo ' + (index + 1) + ' of ' + slides.length);
    return dot;
  });

  function show(index, manual) {
    active = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      var selected = i === active;
      slide.classList.toggle('is-active', selected);
      slide.setAttribute('aria-hidden', selected ? 'false' : 'true');
      dots[i].setAttribute('aria-current', selected ? 'true' : 'false');
    });
    if (manual && announcement) {
      var caption = slides[active].querySelector('.lab-slide-caption');
      announcement.setAttribute('aria-live', 'polite');
      announcement.textContent = 'Photo ' + (active + 1) + ' of ' + slides.length +
        (caption ? ': ' + caption.textContent.trim() : '');
    }
    resetTimer();
  }

  function stopTimer() {
    if (timer !== null) { window.clearInterval(timer); timer = null; }
  }

  function canRotate() {
    return !userPaused && !hovering && !focused && !document.hidden && !motionPreference.matches;
  }

  function resetTimer() {
    stopTimer();
    if (canRotate()) timer = window.setInterval(function () { show(active + 1, false); }, interval);
  }

  previousButton.addEventListener('click', function () { show(active - 1, true); });
  nextButton.addEventListener('click', function () { show(active + 1, true); });
  pauseButton.addEventListener('click', function () {
    userPaused = !userPaused;
    pauseButton.setAttribute('aria-pressed', String(userPaused));
    pauseButton.setAttribute('aria-label', userPaused ? 'Play slideshow' : 'Pause slideshow');
    pauseButton.title = userPaused ? 'Play slideshow' : 'Pause slideshow';
    pauseButton.textContent = userPaused ? '▶' : '❚❚';
    resetTimer();
  });
  gallery.addEventListener('mouseenter', function () { hovering = true; stopTimer(); });
  gallery.addEventListener('mouseleave', function () { hovering = false; resetTimer(); });
  gallery.addEventListener('focusin', function () { focused = true; stopTimer(); });
  gallery.addEventListener('focusout', function (event) {
    if (!gallery.contains(event.relatedTarget)) { focused = false; resetTimer(); }
  });
  gallery.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(active + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  document.addEventListener('visibilitychange', resetTimer);
  if (motionPreference.addEventListener) motionPreference.addEventListener('change', resetTimer);
  else if (motionPreference.addListener) motionPreference.addListener(resetTimer);

  controls.hidden = false;
  show(0, false);
})();
