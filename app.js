import { searchdata,createdata } from './database.js';
import express from 'express';
import cors from 'cors'
const app = express()
app.use(express.json());       // For parsing JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials:true
    }
))

app.get('/search',async(req,res)=>{
    try{
    const data = await searchdata(req.query.certNo);
    res.status(200).json({data:data[0]});
    console.log(data)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})
app.post('/createdata',async(req,res)=>{
    const {certNo,name,rollNo,college,yearOptions,location,department,startDate,endDate} = req.body;
    const message = await createdata(parseInt(certNo),name,rollNo,college,department,location,startDate,endDate,yearOptions);
    res.send(message)
})

app.listen(5000,() => {console.log("Server Started on 5000")})
