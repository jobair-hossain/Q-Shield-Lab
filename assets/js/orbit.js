// Q-SHIELD Lab — "Research to Impact" orbit diagram.
// Pauses the rotation on hover/focus so labels are easy to read and click.
(function () {
  var wrap = document.querySelector('.orbit-wrap');
  if (!wrap) return;
  var pause = function () { wrap.classList.add('paused'); };
  var resume = function () { wrap.classList.remove('paused'); };
  wrap.addEventListener('mouseenter', pause);
  wrap.addEventListener('mouseleave', resume);
  wrap.addEventListener('focusin', pause);
  wrap.addEventListener('focusout', resume);
})();
