export async function queryExecutionFn(query){
    try{
        const response = await pool.query(query);
        return response [0]
    }catch(err){
        throw new Error(err.message)
    }
}
