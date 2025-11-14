const carrusel = document.querySelector('.itinerarios-carrusel');
  const leftBtn = document.querySelector('.carrusel-btn.left');
  const rightBtn = document.querySelector('.carrusel-btn.right');

  rightBtn.addEventListener('click', () => {
    carrusel.scrollBy({ left: 320, behavior: 'smooth' });
  });

  leftBtn.addEventListener('click', () => {
    carrusel.scrollBy({ left: -320, behavior: 'smooth' });
  });

const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });