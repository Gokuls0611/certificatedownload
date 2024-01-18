const cerificateQuery = (certNo) => `select certificate_number,name,roll_no,college,department,location,start_date,end_date,year from user where certificate_number = ${certNo}`

export {cerificateQuery}