(function () {
  function isPdfLink(link) {
    try {
      const url = new URL(link.href, window.location.href);
      return url.pathname.toLowerCase().endsWith(".pdf");
    } catch {
      return false;
    }
  }

  function fixPdfLinks() {
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (isPdfLink(link)) {
        link.removeAttribute("download");
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", fixPdfLinks);

  document.addEventListener(
    "click",
    function (event) {
      const link = event.target.closest && event.target.closest("a[href]");
      if (!link || !isPdfLink(link)) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      link.removeAttribute("download");
      window.open(link.href, "_blank", "noopener,noreferrer");
    },
    true
  );
})();