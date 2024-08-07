// express server 
import express, {urlencoded} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app= express();
const PORT=process.env.PORT || 3000;

app.use("/", (_,res) =>{
    return res.status(200).json({
        message:"I'm coming from backend",
        success:true
    })
})
// middlewares

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOption = {
    origin:'http//localhost:5173',
    credentials:true
}

app.use(cors(corsOption));


// const PORT=8000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is listening on port ${PORT}.`);
})