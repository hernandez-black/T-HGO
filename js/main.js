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

