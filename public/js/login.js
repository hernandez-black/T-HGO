document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:3000/api/login", {  // ⬅ CORREGIDO
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, contraseña: password }),
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.mensaje);
            return;
        }

        // Guardar token correctamente
        localStorage.setItem("token", data.token);

        alert("Login exitoso");
        window.location.href = "index.html";

    } catch (error) {
        console.error("Error:", error);
    }
});
