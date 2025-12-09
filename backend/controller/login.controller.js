const User = require("../model/registro.model");
const jwt = require("jsonwebtoken");

const loginUsuario = async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Validar campos
    if (!email || !contraseña) {
      return res.status(400).json({ mensaje: "Faltan datos" });
    }

    // Buscar el usuario
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Comparar contraseña (como no usas bcrypt, comparación directa)
    if (contraseña !== usuario.contraseña) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    // Crear token
    const token = jwt.sign(
      {
        id: usuario._id,
        email: usuario.email,
        nombre: usuario.nombre
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    res.json({
      mensaje: "Inicio de sesión exitoso",
      token,
      usuario
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = { loginUsuario };
