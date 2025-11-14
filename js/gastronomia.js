document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  // Abrir/cerrar menú
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggleBtn.classList.toggle("open");
  });

  // Cerrar menú cuando se dé clic en un enlace (solo en móvil)
  document.querySelectorAll(".navbar-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggleBtn.classList.remove("open");
      }
    });
  });
});
