// Source d'une visite (mesure d'audience) : un lien marqué (?utm_source=instagram&utm_medium=bio,
// ?utm_source=ambassadeur&utm_campaign=lea, ou le raccourci ?src=…) est repassé aux liens de la
// vitrine et aux boutons vers l'app, pour que la source arrive jusqu'à l'inscription (l'app la
// transmet à la création du compte). Aucun cookie ni stockage sur l'appareil : la source ne vit que
// dans l'URL.
(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'src'];
  var here = new URLSearchParams(location.search);
  var keep = [];
  KEYS.forEach(function (k) {
    var v = here.get(k);
    if (v) keep.push([k, v.slice(0, 60)]);
  });
  if (!keep.length) return;

  document.querySelectorAll('a[href]').forEach(function (a) {
    var raw = a.getAttribute('href');
    if (!raw || /^(mailto:|tel:|javascript:)/i.test(raw)) return;
    var url;
    try { url = new URL(raw, location.href); } catch (e) { return; }
    var toApp = url.hostname === 'app.zoma-app.fr'
      && (url.pathname === '/' || url.pathname.indexOf('/auth/register') === 0);
    var internal = url.origin === location.origin && !/\.[a-z0-9]{2,5}$/i.test(url.pathname.replace(/\/index\.html$/, '/'));
    if (!toApp && !internal) return;
    keep.forEach(function (kv) { if (!url.searchParams.has(kv[0])) url.searchParams.set(kv[0], kv[1]); });
    a.setAttribute('href', url.toString());
  });
})();
