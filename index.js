const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://223191:Wintersito123@cluster0.rsowkuq.mongodb.net/concesionaria"
  )
  .then(() => {
    console.log("mongodb conectado");
  })
  .catch((error) => console.log(error));

const ClienteRoute = require("./Routes/Cliente.route");
app.use("/cliente", ClienteRoute);
const VentaRoute = require("./Routes/Ventas.route");
app.use("/venta", VentaRoute);
const VehiculoRoute = require("./Routes/Vehiculo.route");
app.use("/vehiculo", VehiculoRoute);
const VendedorRoute = require("./Routes/Vendedor.route");
app.use("/vendedor", VendedorRoute);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000....");
});

app.use((req, res, next) => {
  const err = new Error("No encontrado");
  err.status = 404;
  next(err);
});

//Manejo de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
