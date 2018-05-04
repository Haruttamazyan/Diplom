const student = require('../models/student');



let obj = {};

obj.index = (req,res)=>{


    student.getall_students(req.user.id,(student)=>{

        res.render('pages/messages', {
            students: student,
            user : req.user // get the user out of session and pass to template
        });

    });


};


module.exports = obj;