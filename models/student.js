const database = require('../config/database/database');

const con = database.connect();
let obj = {};







obj.getall_students = (id,callback)=>{

    let sql = "SELECT * FROM students WHERE user_id="+id;
    con.query(sql,(err,student)=>{
        if (err) throw err;

        callback(student);

    })

}



module.exports = obj;