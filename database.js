import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
}).promise()


export async function searchdata(certNo){
    try{
        return await pool.query("select certificate_number,name,roll_no,college,department,location,start_date,end_date,year from user where certificate_number = ?",certNo);
    }catch(err){
        throw new Error(err.message)
    }
}
export async function createdata(certificate_number,name,roll_no,college,course,department,location,start_date,end_date,year){
    var error = []
    
    if(typeof(certificate_number)===typeof(0)){
        error.push({'attribute':'certNo','status':'error','message':'Certificate should be a number'})
    }
    if(start_date<end_date){
        error.push({'attribute':'date','status':'error','message':'Data should be greater than Start Date'})
    }
    try{
        await pool.query(`insert into user values(?,?,?,?,?,?,?,?,?)`,[certificate_number,name,roll_no,college,course,department,location,start_date,end_date,year]);
        return [{'message':'Insert Succesfully','status':'success',}];
    }catch(err){
        return [{'message':'Please try again...','status':'error','error':error}]
    }
}

