const mysql = require("mysql");
require('dotenv').config();

const sql = mysql.createConnection({
    host : 'b42wrkdyfinyqxc7nc4a-mysql.services.clever-cloud.com',
    user : 'uernez0vqmp6o7wt',
    password : 'y6Z1QFJafVaR3pPFYG2q',
    database : 'b42wrkdyfinyqxc7nc4a'
})

sql.connect((err)=>{
    if(!err){
        console.log("datbase connected successfully");
        console.log("Cloudinary Config:", process.env.CLOUD_NAME, process.env.API_KEY, process.env.API_SECRET);

    }else{
        console.log("datbase error");
    }
});

module.exports = sql;
