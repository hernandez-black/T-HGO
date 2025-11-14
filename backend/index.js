const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const conection = require("./database/conection");
const registroRoutes = require("./routes/registro.routes");
const resenasRoutes = require("./routes/resenas.routes");

conection();
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, "../public")));
// 🟢 Configurar CORS de forma global
app.use(cors({
  origin: "*", // Permitir cualquier origen
  methods: ["GET", "POST"], // Permitir GET y POST
  allowedHeaders: ["Content-Type"], // Permitir solo encabezados necesarios
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api", registroRoutes);
app.use("/api", resenasRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
