const express = require("express");
const router = express.Router();
const VentaSchema = require("../models/Ventas.model");

router.get("/obtener", (req, res, next) => {
  VentaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/obtenercompleto", (req, res, next) => {
  VentaSchema.find()
    .populate("Carro_vendido") // Reemplaza la referencia con los datos de Vehiculo
    .populate("Vendedor") // Reemplaza la referencia con los datos de Vendedor
    .populate("Cliente")
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post("/crear", async (req, res, next) => {
  try {
    const venta = new VentaSchema(req.body);
    const result = await venta.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/obtener/:id", (req, res, next) => {
  const { id } = req.params;
  VentaSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.patch("/actualizar/:id", (req, res, next) => {
  const { id } = req.params;
  const { Enganche } = req.body;
  VentaSchema.updateOne(
    { _id: id },
    {
      $set: {
        Enganche,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/borrar/:id", (req, res, next) => {
  const { id } = req.params;
  VentaSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
