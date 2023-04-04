import CartManager from "../controllers/cartManager.js";
import ProductManager from "../controllers/productManager.js";

const CartRouter = Router ();

const cartManager = new CartManager();
const productManager = new ProductManager();

CartRouter.post('/:cid/product/:pid'), async (req, res) => {
    try{
    const idCart = +req.params.cid;
    const idProduct = +req.params.pid;

    const { id } = await productManager.getProductsById(idProduct);
    const addProductToCart = await cartManager.addProductToCart(idCart, id);
    res.send(addProductToCart);
    }catch (error) {
        res.status(500).send(error)
    }
}