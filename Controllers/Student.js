const database = require('../config/database/database');

const con = database.connect();

const student = require('../models/student');

let obj = {};


obj.add_student = (req,res)=>{
    let user_id = req.body.user_id,
        name = req.body.name,
        lastname = req.body.lastname,
        email = req.body.email,
        group = req.body.group,
        phone = req.body.phone,
        pwd = req.body.pwd;


    //let sql = `INSERT INTO students (user_id,name, lastname, email,your_group, phone, password) VALUES (${user_id}, ${name},${lastname},${email},${group},${phone},${pwd})`;
    let insertQuery = "INSERT INTO students ( user_id,name, lastname, email,hph_group, phone, password ) values ('" + user_id + "','" + name + "','" + lastname + "','" + email + "','" + group + "','" + phone + "','" + pwd + "')";

  //  console.log(req.body,sql);
    con.query(insertQuery, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('/tables');
    });


};
obj.index = (req,res)=>{
    /*let sql = "SELECT * FROM students WHERE user_id="+req.user.id;
    con.query(sql,(err,student)=>{
        if (err) throw err;

        res.render('pages/tables', {
            students: student,
            user : req.user // get the user out of session and pass to template
        });

    })*/
    student.getall_students(req.user.id,(student)=>{
        res.render('pages/tables', {
            students: student,
            user : req.user // get the user out of session and pass to template
        });
    })


}



module.exports = obj;

