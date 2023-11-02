const express = require("express");
const router = express.Router();
const ClienteSchema = require("../models/Cliente.model");

router.get("/obtener", (req, res, next) => {
  ClienteSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post("/agregarventa/:id", async (req, res, next) => {
  const { id } = req.params;
  const historial = req.body.historial;

  try {
    const vendedor = await ClienteSchema.findById(id);

    if (!vendedor) {
      return res.status(404).json({ message: "Vendedor no encontrado" });
    }

    vendedor.Historial.push(historial);

    await vendedor.save();

    return res
      .status(200)
      .json({ message: "Venta agregada al historial del vendedor" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al agregar la venta al historial del vendedor" });
  }
});

router.post("/crear", async (req, res, next) => {
  try {
    const cliente = new ClienteSchema(req.body);
    const result = await cliente.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/obtener/:id", (req, res, next) => {
  const { id } = req.params;
  ClienteSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.patch("/actualizar/:id", (req, res, next) => {
  const { id } = req.params;
  const { Nombre, Apellido, Telefono } = req.body;
  ClienteSchema.updateOne(
    { _id: id },
    {
      $set: {
        Nombre,
        Apellido,
        Telefono,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/borrar/:id", (req, res, next) => {
  const { id } = req.params;
  ClienteSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
