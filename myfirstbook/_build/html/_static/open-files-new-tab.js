document.addEventListener("DOMContentLoaded", function () {
  const fileTypes = [".pdf", ".docx", ".pptx", ".xlsx", ".ipynb"];

  document.querySelectorAll("a[href]").forEach(function (link) {
    const href = link.getAttribute("href").toLowerCase();

    if (fileTypes.some(ext => href.includes(ext))) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.removeAttribute("download");
    }
  });
});