document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");
  const form = document.getElementById("review-form");
  const reviewList = document.querySelector(".reviews-list");
  let rating = 0;

  // Marcar estrellas seleccionadas
  stars.forEach(star => {
    star.addEventListener("click", () => {
      rating = parseInt(star.getAttribute("data-value"));
      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add("active");
      }
    });
  });

  // Agregar nueva reseña
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const place = document.getElementById("place").value;
    const comment = document.getElementById("comment").value;

    if (rating === 0) {
      alert("Por favor selecciona una calificación ⭐");
      return;
    }

    const newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `
      <div class="review-header">
        <div>
          <h3 class="review-name">${name}</h3>
          <p class="review-place">Lugar: ${place}</p>
        </div>
        <div class="review-stars">${"⭐".repeat(rating)}</div>
      </div>
      <p class="review-text">${comment}</p>
    `;

    reviewList.appendChild(newReview);
    form.reset();
    stars.forEach(s => s.classList.remove("active"));
    rating = 0;
  });
});
