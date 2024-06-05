import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/db.config.js";

dotenv.config();
const app =express();


const PORT  = process.env.PORT || 3000;


app.get("/",(req, res) =>{
    res.send("This is root");
})



app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
    dbconnect();
})