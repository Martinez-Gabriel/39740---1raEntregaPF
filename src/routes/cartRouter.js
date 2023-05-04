import { Router } from "express";
import CartController, { deleteOne,getOne,save,update,} from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/", CartController.list);
cartRouter.get("/:id", getOne);
cartRouter.post("/", save);
cartRouter.put("/:id", update);
cartRouter.delete("/:id", deleteOne);

export default cartRouter;
