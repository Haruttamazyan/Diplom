const express = require('express');
const router = express.Router();
const student = require('../Controllers/Student');


router.get('/home',isLoggedIn,(req,res)=>{
    //console.log(req.user);
    res.render('home', {
        user : req.user // get the user out of session and pass to template
    });

});
router.get('/calendar',isLoggedIn,(req,res)=>{
    //console.log(req.user);
    res.render('pages/calendar', {
        user : req.user // get the user out of session and pass to template
    });

});

router.get('/tables',isLoggedIn,student.get_students);


router.get('/stats',isLoggedIn,(req,res)=>{
    //console.log(req.user);
    res.render('pages/stats', {
        user : req.user // get the user out of session and pass to template
    });

});
router.get('/messages',isLoggedIn,(req,res)=>{
    //console.log(req.user);
    res.render('pages/messages', {
        user : req.user // get the user out of session and pass to template
    });

});
router.get('/editors',isLoggedIn,(req,res)=>{
    //console.log(req.user);
    res.render('pages/editors', {
        user : req.user // get the user out of session and pass to template
    });

});
router.get('/forms',isLoggedIn,(req,res)=>{
    //console.log(req.user);
    res.render('pages/forms', {
        user : req.user // get the user out of session and pass to template
    });

});

router.get('/profile',isLoggedIn,(req,res)=>{
    //console.log(req.user);
    res.render('profile.ejs', {
        user : req.user // get the user out of session and pass to template
    });


});

router.post('/add_student',isLoggedIn,student.add_student);





// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;