import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './configs/db.js';
import router from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(bodyParser.json());

// Setup Routes
app.use('/auth', router);
app.use('/product', productRouter);
export default app;