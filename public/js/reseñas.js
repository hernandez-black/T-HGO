const API_URL = "http://localhost:3000/api/resenas";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  const reviewsList = document.querySelector(".reviews-list");
  let selectedRating = 0;

  // ⭐ Selección de estrellas
  document.querySelectorAll(".stars span").forEach((star) => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.value);
      document
        .querySelectorAll(".stars span")
        .forEach((s, i) => (s.style.color = i < selectedRating ? "gold" : "gray"));
    });
  });

  // 📤 Enviar reseña
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("name").value.trim();
    const lugar = document.getElementById("place").value.trim();
    const comentario = document.getElementById("comment").value.trim();

    const token = localStorage.getItem("token"); // ⬅ AGREGADO

    if (!token) {
      alert("Debes iniciar sesión para escribir una reseña.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { 
        "Content-Type": "application/json",
},
        body: JSON.stringify({
          nombre,
          lugar,
          comentario,
          calificacion: selectedRating,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Reseña enviada con éxito.");
        form.reset();
        selectedRating = 0;
        document.querySelectorAll(".stars span").forEach((s) => (s.style.color = "gray"));
        loadReviews();
      } else {
        alert("Error: " + data.mensaje);
      }
    } catch (error) {
      console.error("Error al enviar reseña:", error);
      alert("No se pudo conectar con el servidor.");
    }
  });

  // 📥 Cargar reseñas
  async function loadReviews() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      reviewsList.innerHTML = "";

      if (data.resenas && data.resenas.length > 0) {
        data.resenas.forEach((r) => {
          const div = document.createElement("div");
          div.classList.add("review");
          div.innerHTML = `
            <div class="review-header">
              <div>
                <h3 class="review-name">${r.nombre}</h3>
                <p class="review-place">Lugar: ${r.lugar}</p>
              </div>
              <div class="review-stars">${"⭐".repeat(r.calificacion)}</div>
            </div>
            <p class="review-text">${r.comentario}</p>
          `;
          reviewsList.appendChild(div);
        });
      } else {
        reviewsList.innerHTML = "<p>No hay reseñas aún.</p>";
      }
    } catch (error) {
      console.error("Error al cargar reseñas:", error);
    }
  }

  loadReviews();
});
