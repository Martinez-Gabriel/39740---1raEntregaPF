import dotenv from "dotenv";
dotenv.config();

import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import mongoStore from "connect-mongo";
import cookieParser from "cookie-parser";

import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import userRouter from "./routes/userRouter.js";
import sessionRouter from "./routes/sessionRouter.js";

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
    app.use(cookieParser());
    app.use(session({
      store: mongoStore.create({
        mongoUrl: process.env.MONGO_DB_URI,
        ttl: 10
      }),
      secret: 'CoderS3cR3tC0D3',
      resave: false,
      saveUninitialized: false
    }));

    //IMPORTANDO ROUTES.
    app.use("/api/products", productRouter);
    app.use("/api/carts", cartRouter);
    app.use("/api/sessions", sessionRouter);
    app.use("/api/users", userRouter);
    

    //CONFIGURACION DE PUERTO.
    const httpServer = app.listen(SERVER_PORT, () => {
      console.log(`ON: Server listening on port: localhost:${SERVER_PORT}`);
    });
  } catch (e) {
    console.log("Error: can't connected to data base");
    console.log(e);
  }
})();
