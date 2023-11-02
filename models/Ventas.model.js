const mongoose = require("mongoose");
const VentaSchema = mongoose.Schema(
  {
    Fecha: {
      type: Date,
      default: Date.now,
    },
    Carro_vendido: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vehiculo",
    },
    Vendedor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vendedor",
    },
    Cliente_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Cliente",
    },
    Enganche: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Venta", VentaSchema);
