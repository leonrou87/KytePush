/* KYTEPUSH fleet analytics beacon — drop one line on any app:
   <script defer src="https://kytepush.com/track.js"></script>
   Infers the product from the hostname; sends an anonymous pageview pixel. */
(function () {
  try {
    var h = location.hostname;
    var site;
    if (h === "kytepush.com" || h === "www.kytepush.com" || h === "localhost") {
      site = "core";
    } else if (/\.kytepush\.com$/.test(h)) {
      site = h.replace(/\.kytepush\.com$/, "");
    } else {
      site = h;
    }
    function ping() {
      var img = new Image();
      img.src =
        "https://kytepush.com/api/track?s=" + encodeURIComponent(site) +
        "&p=" + encodeURIComponent(location.pathname) +
        "&r=" + encodeURIComponent(document.referrer || "") +
        "&t=" + Date.now();
    }
    ping();
    // track client-side route changes (SPA)
    var push = history.pushState;
    history.pushState = function () {
      push.apply(this, arguments);
      ping();
    };
    window.addEventListener("popstate", ping);
  } catch (e) {}
})();
