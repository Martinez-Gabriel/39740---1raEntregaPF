import { Router } from "express";
import { getHome } from "../controllers/home.js";
import { getRealTimeProducts } from "../controllers/realTimeProducts.js";

const ViewRouter = new Router();

//GET HOME SIN WEBSOCKET.
ViewRouter.get("/", getHome);

// GET REALTIMEPRODUCTS CON WEBSOCKET.
ViewRouter.get("/realtimeproducts", getRealTimeProducts);

export default ViewRouter;
