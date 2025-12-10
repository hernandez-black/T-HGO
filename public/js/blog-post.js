// Detectar cuando los posts entran en el viewport (pantalla visible)
document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".post-card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); // Se activa cuando el 20% del elemento es visible

  posts.forEach(post => {
    observer.observe(post);
  });
});
