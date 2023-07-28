import {Router} from "express";
import {send} from "../controllers/mailingController.js";

const mailingRouter = Router();

mailingRouter.post("/", send);

export default mailingRouter;