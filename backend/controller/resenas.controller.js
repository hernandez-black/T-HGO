const Resena = require("../model/resenas.model");

// 📥 Obtener todas las reseñas
const obtenerResenas = async (req, res) => {
   console.log("📩 Datos recibidos:", req.body);
  try {
    const resenas = await Resena.find().sort({ fecha: -1 });
    res.status(200).json({ resenas });
  } catch (error) {
    console.error("❌ Error al obtener reseñas:", error);
    res.status(500).json({ mensaje: "Error al obtener reseñas" });
  }
};

// 📤 Crear nueva reseña
const crearResena = async (req, res) => {
  try {
    const { nombre, lugar, comentario, calificacion } = req.body;

    if (!nombre || !lugar || !comentario || !calificacion) {
      return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
    }

    const nuevaResena = new Resena({
      nombre,
      lugar,
      comentario,
      calificacion,
    });

    await nuevaResena.save();
    res.status(201).json({ mensaje: "Reseña guardada con éxito", resena: nuevaResena });
  } catch (error) {
    console.error("❌ Error al guardar reseña:", error);
    res.status(500).json({ mensaje: "Error al guardar la reseña" });
  }
};

module.exports = { obtenerResenas, crearResena };
