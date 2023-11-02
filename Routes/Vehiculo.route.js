const express = require("express");
const router = express.Router();
const VehiculoSchema = require("../models/Vehiculo.model");

router.get("/obtener", (req, res, next) => {
  VehiculoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post("/crear", async (req, res, next) => {
  try {
    const Vehiculo = new VehiculoSchema(req.body);
    const result = await Vehiculo.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/obtener/:id", (req, res, next) => {
  const { id } = req.params;
  VehiculoSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.patch("/actualizar/:id", (req, res, next) => {
  const { id } = req.params;
  const { Modelo, color, year, precio, estado } = req.body;
  VehiculoSchema.updateOne(
    { _id: id },
    {
      $set: {
        Modelo,
        color,
        year,
        precio,
        estado,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/borrar/:id", (req, res, next) => {
  const { id } = req.params;
  VehiculoSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
