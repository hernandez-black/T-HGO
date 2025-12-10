const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ mensaje: "Acceso denegado, inicia sesión" });
  }

  // Si viene con "Bearer ..." → quitarlo
  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};

module.exports = verificarToken;
