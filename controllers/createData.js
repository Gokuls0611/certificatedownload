const createData = async(req,res)=>{
    try{
        const {certNo,name,rollNo,college,yearOptions,location,department,startDate,endDate} = req.body;
        const response = await createdata(parseInt(certNo),name,rollNo,college,department,location,startDate,endDate,yearOptions);
        res.status.send(200).json({"response":response[0]})
    }catch(err){
        console.error(err);
        res.status.send(500).json({error:err.message})
    }
}

export default createData
