import { queryExecutionFn } from "../dbutils/executeQuery.js";
import { cerificateQuery } from '../dbutils/query.js'
const searchCeritificate = async (req, res) => {
    try {
        const data = await queryExecutionFn(cerificateQuery(req.query.cerificate_number));
        console.log(data)
        res.status(200).json({ data: data });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export default searchCeritificate