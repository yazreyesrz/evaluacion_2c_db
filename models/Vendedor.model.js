const mongoose = require("mongoose");
const VendedorSchema = mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: [true, "Nombre necesario"],
    },
    Apellido: {
      type: String,
      required: [true, "Apellido necesario"],
    },
    Turno: {
      type: String,
      required: [true, "Nombre necesario necesario"],
    },
    Historial: [mongoose.Schema.Types.ObjectId],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Vendedor", VendedorSchema);
