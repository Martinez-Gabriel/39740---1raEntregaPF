import { Router } from "express";
import CartController, { create, addProduct, getOne, updateProductQuantity, deleteOneProduct, deleteAllProducts} from "../controllers/cartController.js";

const cartRouter = Router();



cartRouter.get("/", CartController.list);
cartRouter.post("/", create);
cartRouter.post ("/:cid/products/:pid", addProduct);
cartRouter.get("/:cid", getOne);
cartRouter.put("/:cid/products/:pid", updateProductQuantity);
cartRouter.delete("/:cid/products/:pid", deleteOneProduct);
cartRouter.delete("/:cid", deleteAllProducts);



export default cartRouter;
