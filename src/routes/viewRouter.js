import { Router } from "express";
import { getHome } from "../controllers/home.js";
import { getRealTimeProducts } from "../controllers/realTimeProducts.js";

const ViewRouter = new Router();

ViewRouter.get("/", getHome);
ViewRouter.get("/realtimeproducts", getRealTimeProducts);

export default ViewRouter;
