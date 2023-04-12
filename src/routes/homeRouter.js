import { Router } from "express";
import { getHome } from "../controllers/home.js";
import { getRealTimeProducts } from "../controllers/realTimeProducts.js";

const HomeRouter = new Router();

HomeRouter.get("/", getHome);
HomeRouter.get("/realtimeproducts", getRealTimeProducts);

export default HomeRouter;
