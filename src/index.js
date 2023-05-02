import dotenv from "dotenv";
dotenv.config();

import express from "express";
import productRouter from "./mongoose/routes/productRouter.js";
import mongoose from "mongoose";
import productsSchema from "./mongoose/models/productsSchema.js";

void (async () => {
  try {
    const SERVER_PORT = 8080;

    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const app = express();

    //MIDDLEWARE REQ.QUERY.
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //IMPORTANDO ROUTES.
    app.use("/api/products", productRouter);
    // app.use("/api/carts", CartRouter);
    // app.use("/api/", ViewRouter);

    //CONFIGURACION DE PUERTO.
    const httpServer = app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port: localhost:${SERVER_PORT}`);
    });
  } catch (e) {
    console.log("Error: ");
    console.log(e);
  }
})();
