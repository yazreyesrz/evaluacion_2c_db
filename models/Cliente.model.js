const mongoose = require("mongoose");
const ClienteSchema = mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Apellido: {
      type: String,
      required: true,
    },
    Telefono: {
      type: Number,
      required: true,
    },
    Historial: [mongoose.Schema.Types.ObjectId],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Cliente", ClienteSchema);
