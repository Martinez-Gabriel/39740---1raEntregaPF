 import { Router } from 'express';
 import { getHome } from '../controllers/home.js';

 const HomeRouter = new Router();

 HomeRouter.get('/', getHome);

 export default HomeRouter;

