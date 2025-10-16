import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './configs/db.js';
import router from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();
const app = express();

let isconnected = false;
async function connectToDB(){
    try{
        await connectDB();
        isconnected = true;
    }catch(err){
        console.error("Database connection failed:", err);
    }
}

app.use((req, res, next) => {
    if(!isconnected){
        connectToDB().then(() => next());
    }else{
        next();
    }
});

app.use(cors());
app.use(bodyParser.json());

console.log("backend req");
app.use('/auth', router);
app.use('/product', productRouter);

export default app;