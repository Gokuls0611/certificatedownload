



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

