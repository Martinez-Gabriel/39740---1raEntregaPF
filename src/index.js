import express from "express";
import productRouter from "./routes/productRouter.js";
import CartRouter from "./routes/cartRouter.js";
import HomeRouter from "./routes/homeRouter.js";
import { engine } from "express-handlebars";
import { resolve } from "path";
import { Server } from "socket.io";
import ProductManager from "./controllers/productManager.js";

const pm = new ProductManager();

async function traer() {
  return await pm.getProducts();
}

void (async () => {
  try {
    const SERVER_PORT = 8080;

    const app = express();

    //MIDDLEWARE REQ.QUERY
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api/products", productRouter);
    app.use("/api/carts", CartRouter);
    app.use("/api/", HomeRouter);

    const viewsPath = resolve("./views");

    app.engine(
      "handlebars",
      engine({
        layoutsDir: `${viewsPath}/layouts`,
        defaultLayout: `${viewsPath}/layouts/main.handlebars`,
      })
    );
    app.set("view engine", "handlebars");
    app.set("views", viewsPath);

    //CONFIGURACION DE PUERTO
    const httpServer = app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port: ${SERVER_PORT}`);
    });

    const socketServer = new Server(httpServer);

    socketServer.on("connection", (socket) => {
      console.log("Cliente conectado");

      socket.on("lista", async (data) => {
        data = await traer();
        socket.emit("listaActualizada", data);
      });
    });
  } catch (e) {
    console.log("Error: ");
    console.log(e);
  }
})();
