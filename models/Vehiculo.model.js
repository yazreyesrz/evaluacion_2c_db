const mongoose = require("mongoose");
const VehiculoSchema = mongoose.Schema(
  {
    Modelo: {
      type: String,
      required: true,
    },
    Color: {
      type: String,
      required: true,
    },
    Year: {
      type: Number,
      required: true,
    },
    Precio: {
      type: Number,
      required: true,
    },
    Estado: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Vehiculo", VehiculoSchema);
