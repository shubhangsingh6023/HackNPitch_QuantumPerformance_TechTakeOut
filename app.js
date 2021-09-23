const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const expressHsb = require('express-handlebars'); 
const path = require('path');
var MongoStore = require('connect-mongo');
const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));


// EJS
app.use(expressLayouts);
//app.engine('.ejs',expressHsb({defaultLayout:'layout',extname: '.ejs'}));
app.set('view engine', 'ejs');
//app.set('layout','./views/layout2');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store:  MongoStore.create({ mongoUrl: 'mongodb+srv://soham:SOHAMZ12@cluster0.eqg4n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'},{ useNewUrlParser: true ,useUnifiedTopology: true}),
    cookie: {maxAge: 180*60*1000 },
    

  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.session = req.session;
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
