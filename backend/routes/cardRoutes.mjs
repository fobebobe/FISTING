import { Router } from "express";
import CardController from "../controllers/cardcontroller.mjs";


const cardRouter = Router();

cardRouter.get('/get', CardController.getAll);
cardRouter.post('/create', CardController.create);
cardRouter.put('/:id', CardController.update);
cardRouter.delete('/:id', CardController.delete);

export default cardRouter;