import express from 'express';
import dotenv from "dotenv";
import dbConnection from "./db/dbConnection.js";


dotenv.config({
   
})

const app = express();
dbConnection()

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});