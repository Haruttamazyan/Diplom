const express = require('express');
const path = require('path');
const app = express();
const passport = require('passport');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash    = require('connect-flash');
const session      = require('express-session');
const route = require('./routes/index');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./config/passport')(passport);






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({ secret: 'tyommm' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.use('/',route);
require('./routes/auth')(app,passport);




app.listen('3000',()=>{
    console.log('sksec 3000');
})


