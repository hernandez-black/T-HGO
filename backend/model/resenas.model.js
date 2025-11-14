const mongoose = require("mongoose");

const resenaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  lugar: {
    type: String,
    required: true,
    trim: true,
  },
  comentario: {
    type: String,
    required: true,
    trim: true,
  },
  calificacion: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Resena", resenaSchema);
