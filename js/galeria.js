document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-links ul");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navMenu.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en link (solo móvil)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        menuToggle.classList.remove("open");
        navMenu.classList.remove("active");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  
  const buscador = document.getElementById("buscador");
  const filtroBtns = document.querySelectorAll(".filtro-btn");
  const items = document.querySelectorAll(".galeria-item");

  // 🔍 Búsqueda por nombre
  buscador.addEventListener("input", () => {
    filtrarGaleria();
  });

  // 🗂️ Filtros por categoría
  filtroBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filtroBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filtrarGaleria();
    });
  });

  // 🔎 Función de filtrado
  function filtrarGaleria() {
    const texto = buscador.value.toLowerCase();
    const categoria = document.querySelector(".filtro-btn.active").dataset.category;

    items.forEach(item => {
      const nombre = item.dataset.name.toLowerCase();
      const cat = item.dataset.category;

      const coincideNombre = nombre.includes(texto);
      const coincideCategoria = categoria === "all" || categoria === cat;

      if (coincideNombre && coincideCategoria) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal-galeria");
  const modalImg = document.getElementById("modal-img");
  const modalTexto = document.getElementById("modal-texto");
  const cerrar = document.querySelector(".cerrar-modal");

  document.querySelectorAll(".galeria-item").forEach(item => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;
      const titulo = item.dataset.name;

      modal.style.display = "block";
      modalImg.src = imgSrc;
      modalTexto.textContent = titulo;
    });
  });

  cerrar.addEventListener("click", () => modal.style.display = "none");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

});

document.querySelectorAll(".tag").forEach(tag => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("active");
  });
});
