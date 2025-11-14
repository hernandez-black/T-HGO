const Contacto = require("../model/registro.model");

// Controlador para crear un nuevo registro
const crearRegistro = async (req, res) => {
  try {
    const { nombre, email, contraseña } = req.body;

    // Validar campos vacíos
    if (!nombre || !email || !contraseña) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios",
      });
    }

    // Verificar si el correo ya está registrado
    const existeUsuario = await Contacto.findOne({ email });
    if (existeUsuario) {
      return res.status(409).json({
        mensaje: "El correo ya está registrado",
      });
    }

    // Crear el nuevo usuario
    const nuevoRegistro = new Contacto({
      nombre,
      email,
      contraseña,
    });

    await nuevoRegistro.save();

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: nuevoRegistro,
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
};

module.exports = { crearRegistro };
