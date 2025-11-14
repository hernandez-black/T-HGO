const express = require("express");
const router = express.Router();
const { obtenerResenas, crearResena } = require("../controller/resenas.controller");

// Rutas
router.get("/resenas", obtenerResenas);
router.post("/resenas", crearResena);

module.exports = router;
