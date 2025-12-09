const express = require("express");
const router = express.Router();
const { obtenerResenas, crearResena } = require("../controller/resenas.controller");
const auth = require("../middleware/auth.middleware");

// Rutas
router.get("/resenas", obtenerResenas);

// 🔐 PROTEGER creación de reseñas
router.post("/resenas", auth, crearResena);

module.exports = router;
