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


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("gastroModal");
  const modalImg = document.getElementById("gastroImg");
  const modalTitle = document.getElementById("gastroTitle");
  const modalNahuatl = document.getElementById("gastroNahuatl");
  const modalMeaning = document.getElementById("gastroMeaning");
  const modalFoods = document.getElementById("gastroFoods");
  const closeBtn = document.querySelector(".gastro-close");

  // Datos de cada sección
  const puebloData = {
    huasca: {
      img: "/assets/gastronomia/TamalesHuasca.jpg",
      title: "Huasca de Ocampo",
      nahuatl: "Huāxicā",
      meaning: "Lugar de alegría o fiesta",
      foods: ["Tamales de dulce", "Capirotada", "Dulces de guayaba", "Pulque"]
    },

    real: {
      img: "/assets/gastronomia/DulcesLecheRealM.jpg",
      title: "Real del Monte",
      nahuatl: "Zontlazola",
      meaning: "Lugar entre montes",
      foods: ["Pastes", "Dulces de leche", "Panes artesanales", "Conservas"]
    },

    mineral: {
      img: "/assets/gastronomia/GuisadosMineral.jpg",
      title: "Mineral del Chico",
      nahuatl: "Xicohtzinco",
      meaning: "Lugar pequeño",
      foods: ["Guisados serranos", "Quesos artesanales", "Pulque", "Licores de frutas"]
    }
  };

  // Detectar clic en cada card
  document.querySelectorAll(".blog-post").forEach(post => {
    post.addEventListener("click", () => {
  let key = "";

  if (post.classList.contains("post-huasca")) key = "huasca";
  if (post.classList.contains("post-real")) key = "real";
  if (post.classList.contains("post-mineral")) key = "mineral";

  const data = puebloData[key];

  modalImg.src = data.img;
  modalTitle.textContent = data.title;
  modalNahuatl.textContent = "Nombre en náhuatl: " + data.nahuatl;
  modalMeaning.textContent = data.meaning;

  modalFoods.innerHTML = "";
  data.foods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    modalFoods.appendChild(li);
  });

  modal.style.display = "flex";

  // Scroll arriba del contenido
  setTimeout(() => {
    document.querySelector(".gastro-modal-content").scrollTop = 0;
  }, 50);
});
  });

  // cerrar modal
  closeBtn.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
