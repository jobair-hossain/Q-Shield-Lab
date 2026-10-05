// Q-SHIELD Lab — publications page: live search + category/year filters.
(function () {
  var list = document.querySelector('.pub-list');
  if (!list) return;
  var items = Array.prototype.slice.call(list.querySelectorAll('.pub'));
  var searchInput = document.getElementById('pub-search');
  var topicSelect = document.getElementById('pub-topic');
  var yearSelect = document.getElementById('pub-year');
  var resetBtn = document.getElementById('pub-reset');
  var countEl = document.getElementById('pub-count');
  var emptyEl = document.getElementById('pub-empty');

  function applyTopicFromQuery() {
    var params = new URLSearchParams(window.location.search);
    var topic = params.get('topic');
    if (topic && topicSelect) {
      var opt = Array.prototype.find.call(topicSelect.options, function (o) {
        return o.value.toLowerCase() === topic.toLowerCase();
      });
      if (opt) topicSelect.value = opt.value;
    }
  }

  function filter() {
    var q = (searchInput && searchInput.value || '').trim().toLowerCase();
    var topic = topicSelect ? topicSelect.value : '';
    var year = yearSelect ? yearSelect.value : '';
    var visible = 0;

    items.forEach(function (item) {
      var text = item.textContent.toLowerCase();
      var matchQ = !q || text.indexOf(q) !== -1;
      var topics = (item.dataset.topic || '').split(' ');
      var matchTopic = !topic || topics.indexOf(topic) !== -1;
      var matchYear = !year || item.dataset.year === year;
      var show = matchQ && matchTopic && matchYear;
      item.hidden = !show;
      if (show) visible++;
    });

    if (countEl) countEl.textContent = visible + (visible === 1 ? ' publication' : ' publications');
    if (emptyEl) emptyEl.classList.toggle('show', visible === 0);
  }

  [searchInput, topicSelect, yearSelect].forEach(function (el) {
    if (el) el.addEventListener('input', filter);
  });
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (searchInput) searchInput.value = '';
      if (topicSelect) topicSelect.value = '';
      if (yearSelect) yearSelect.value = '';
      filter();
    });
  }

  applyTopicFromQuery();
  filter();
})();
