
/* === Boton Hamgurgesa ===*/
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-btn-alt");
  const menu = document.getElementById("menu-alt");

  // ✅ Evento de clic en el botón hamburguesa
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggleBtn.classList.toggle("open");
  });

  // 🔹 Cerrar el menú al hacer clic en un enlace (solo en móvil)
  document.querySelectorAll(".navbar-menu-alt a").forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggleBtn.classList.remove("open");
      }
    });
  });
});
