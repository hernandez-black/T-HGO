document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-links ul");

  // Abrir/cerrar menú
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // Cerrar menú al hacer clic en un enlace (solo en móvil)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900 && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
      }
    });
  });
});

// Buscador de galería
document.getElementById("buscador").addEventListener("input", function() {
  const filtro = this.value.toLowerCase();
  const items = document.querySelectorAll(".galeria-item");

  items.forEach(item => {
    const municipio = item.getAttribute("data-municipio").toLowerCase();
    if (municipio.includes(filtro)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});