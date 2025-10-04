document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  const overlay = document.getElementById("page-transition");

  // === ENTRADA ===
  // Mostra o overlay azul e depois revela o conteúdo
  overlay.classList.add("active");
  setTimeout(() => {
    overlay.classList.remove("active");
    if (page) page.classList.add("animate-in");
  }, 600);

  // === SAÍDA ===
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href) return;

      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || link.target === "_blank" || link.hasAttribute("download");
      const isHash = href.startsWith("#");

      if (!isExternal && !isHash) {
        e.preventDefault();

        // ativa overlay azul para saída
        overlay.classList.add("active");

        setTimeout(() => {
          window.location.href = href;
        }, 600);
      }
    });
  });
});