module.exports = (app,passport)=>
{

    app.get('/',isLoggedIn, (req, res) => {
        res.render('auth/login', {message: req.flash('authMessage')});
    });
    app.get('/signup',isLoggedIn, (req, res) => {
        res.render('auth/signup', {message: req.flash('signupMessage')});
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/home', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/home', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

// =====================================
// LOGOUT ==============================
// =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    app.post('/stu_login',passport.authenticate('local-login-student',{
        successRedirect : '/stu_mess', // redirect to the secure profile section
        failureRedirect : '/stu_login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    app.get('/stu_login',(req,res)=>{
    res.render('auth/stu_login', {message: req.flash('signupMessage')});
    });

    // route middleware to make sure
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (!req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/home');
    }



}


