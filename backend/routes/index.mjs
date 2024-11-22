import { Router } from "express";
import userRouter from "./userRoutes.mjs";
import cardRouter from "./cardRoutes.mjs";

const router = Router();
router.use('/user', userRouter);
router.use('/cards', cardRouter);

export default router;