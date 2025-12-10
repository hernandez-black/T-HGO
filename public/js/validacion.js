// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const password = document.getElementById("password");

  // Crear contenedores de error dinámicamente
  [nombre, correo, password].forEach((input) => {
    const error = document.createElement("small");
    error.classList.add("error-msg");
    error.style.color = "#ff6b6b";
    error.style.display = "none";
    input.parentNode.appendChild(error);
  });

  // Expresiones regulares
  const reNombre = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]{2,80}$/;
  const reCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const rePassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

  // Función de validación
  function validarCampo(input, regex, mensajeError) {
    const error = input.parentNode.querySelector(".error-msg");
    if (!regex.test(input.value.trim())) {
      error.textContent = mensajeError;
      error.style.display = "block";
      input.style.borderColor = "#ff6b6b";
      return false;
    } else {
      error.textContent = "";
      error.style.display = "none";
      input.style.borderColor = "#2ecc71";
      return true;
    }
  }

  // Evento de validación en tiempo real
  nombre.addEventListener("input", () =>
    validarCampo(nombre, reNombre, "Nombre inválido. Solo letras y espacios.")
  );
  correo.addEventListener("input", () =>
    validarCampo(correo, reCorreo, "Correo electrónico inválido.")
  );
  password.addEventListener("input", () =>
    validarCampo(
      password,
      rePassword,
      "Contraseña débil. Debe tener 8+ caracteres, 1 mayúscula, 1 número y 1 símbolo."
    )
  );

  // Evento de envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita el envío por defecto

    const nombreValido = validarCampo(
      nombre,
      reNombre,
      "Nombre inválido. Solo letras y espacios."
    );
    const correoValido = validarCampo(
      correo,
      reCorreo,
      "Correo electrónico inválido."
    );
    const passwordValido = validarCampo(
      password,
      rePassword,
      "Contraseña débil. Debe tener 8+ caracteres, 1 mayúscula, 1 número y 1 símbolo."
    );

    if (nombreValido && correoValido && passwordValido) {
      alert("✅ Todos los campos son válidos. Listo para enviar a la API.");

      // Aquí más adelante conectaremos con tu backend:
      // fetch('http://localhost:3000/api/registro', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     nombre: nombre.value,
      //     correo: correo.value,
      //     password: password.value
      //   })
      // })
      // .then(res => res.json())
      // .then(data => console.log(data))
      // .catch(err => console.error(err));

      form.reset();
      [nombre, correo, password].forEach(
        (input) => (input.style.borderColor = "#ccc")
      );
    } else {
      alert("⚠️ Por favor, corrige los errores antes de continuar.");
    }
  });
});
