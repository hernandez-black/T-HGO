const Contacto = require("../model/registro.model");

const crearRegistro = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios",
      });
    }

    // CORRECCIÓN: Buscar por correo
    const existeUsuario = await Contacto.findOne({ email: correo });

    if (existeUsuario) {
      return res.status(409).json({
        mensaje: "El correo ya está registrado",
      });
    }

    const nuevoRegistro = new Contacto({
      nombre,
      email: correo,
      contraseña: password,
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
