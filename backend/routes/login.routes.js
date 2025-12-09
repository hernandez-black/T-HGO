const express = require("express");
const router = express.Router();
const { loginUsuario } = require("../controller/login.controller");

// Ruta de login
router.post("/login", loginUsuario);

module.exports = router;
