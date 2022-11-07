import express from "express";
import dotenv from "dotenv";
import db from './config/database.js';
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app= express();

try{
    await db.authenticate();
    console.log('Database connected...');
    await db.sync();
}catch(error){
    console.error(error);
}
app.use(cors({Credentials:true, origin:"http://localhost"}))
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(5000, ()=> console.log('server running at port 5000'))