(function () {
  var LANGS = ['fr', 'en', 'es'];

  function setLanguage(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'fr';

    LANGS.forEach(function (l) {
      document.querySelectorAll('.tf-lang-' + l).forEach(function (el) {
        el.style.display = l === lang ? 'inline' : 'none';
      });
    });

    document.querySelectorAll('.tf-lang-btn').forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem('tf-lang', lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tf-lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLanguage(btn.dataset.lang); });
    });

    var saved = 'fr';
    try { saved = localStorage.getItem('tf-lang') || 'fr'; } catch (e) {}
    setLanguage(saved);
  });
})();
