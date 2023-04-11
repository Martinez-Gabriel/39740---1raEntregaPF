 import { Router } from 'express';
 import { Home } from '../controllers/home.js';

 const HomeRouter = new Router();

 HomeRouter.get('/', Home);

 export default HomeRouter;

