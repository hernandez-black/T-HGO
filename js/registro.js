document.getElementById("registroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!nombre || !correo || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        correo,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Registro exitoso: " + data.mensaje);
      document.getElementById("registroForm").reset();
    } else {
      alert("⚠️ Error: " + data.mensaje);
    }
  } catch (error) {
    console.error("Error al registrar:", error);
    alert("❌ Error al conectar con el servidor");
  }
});
