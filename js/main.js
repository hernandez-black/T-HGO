document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

// ===========================================
// CARRUSEL MULTI-IMAGEN - TURISMO HIDALGO
// ===========================================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".banner-track");
  const prev = document.querySelector(".banner-btn.prev");
  const next = document.querySelector(".banner-btn.next");
  const items = document.querySelectorAll(".banner-item");

  let currentIndex = 0;
  const totalItems = items.length;
  const visibleItems = 3; // cantidad visible en escritorio

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 20; // ancho + gap
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  next.addEventListener("click", () => {
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
      updateCarousel();
    }
  });

  prev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Ajustar al redimensionar
  window.addEventListener("resize", updateCarousel);
});
// ===========================================
// MOSTRAR INFO AL DAR CLICK (VERSIÓN EXTENDIDA)
// ===========================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("infoModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  const modalNahuatl = document.getElementById("modalNahuatl");
  const modalSignificado = document.getElementById("modalSignificado");
  const modalHistoria = document.getElementById("modalHistoria");

  const closeModal = document.querySelector(".close-modal");

  const items = document.querySelectorAll(".banner-item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      
      const img = item.querySelector("img").src;
      const title = item.querySelector("h3").textContent;
      const desc = item.querySelector("p").textContent;

      // nuevos datos
      const nahuatl = item.dataset.nahuatl;
      const significado = item.dataset.significado;
      const historia = item.dataset.historia;

      modalImg.src = img;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      modalNahuatl.textContent = nahuatl;
      modalSignificado.textContent = significado;
      modalHistoria.textContent = historia;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
