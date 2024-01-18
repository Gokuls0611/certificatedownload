import express from 'express';
import cors from 'cors'

import pool from './connection/connection.js';
import router from './routes/routes.js'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json());       // For parsing JSON requests
app.use(express.urlencoded({ extended: true }));


app.use(cors(
    {
    origin:[process.env.HOST],
    methods:["POST","GET"],
    credentials:true
    }
))

const dbConnection = async()=>{
    try{
        await pool.getConnection(function(err, connection) {
            if (err) throw err; 
            console.log("DB connected");
        });
    }catch(err){
        console.error(err);
    }
}
dbConnection()

app.use('/', router)

const port = process.env.PORT
app.listen(port,() => {console.log(`Server Started on ${port}`)})

