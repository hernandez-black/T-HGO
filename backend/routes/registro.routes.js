const express = require("express");
const router = express.Router();
const { crearRegistro } = require("../controller/registro.controller");

// Ruta para registrar un usuario
router.post("/registro", crearRegistro);

module.exports = router;
