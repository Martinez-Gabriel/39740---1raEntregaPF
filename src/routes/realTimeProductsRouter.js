import { Router } from 'express';
import { realTimeProducts } from '../controllers/realTimeProducts.js'

const realTimeRouter = new Router();

realTimeProducts.get('/realTimeProducts', realTimeProducts);

export default realTimeRouter;