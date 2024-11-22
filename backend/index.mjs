import express from 'express';
import cors from 'cors';
import connectDB from './config/connect_db.mjs';
import router from './routes/index.mjs';
import { Router } from 'express';
import userRouter from './routes/userRoutes.mjs';
import cardRouter from './routes/cardRoutes.mjs';

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(process.env.PORT,(err)=> err ? console.log(err) : console.log('The server started localhost:2000'));