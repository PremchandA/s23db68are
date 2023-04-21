var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }))
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shoeRouter = require('./routes/shoe');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var Shoe = require("./models/shoe");
var resourceRouter = require("./routes/resource");




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shoe', shoeRouter);
app.use('/board', boardRouter);
app.use('/resource',resourceRouter);
app.use('/selector', selectorRouter);

//passport config
// Use the existing connection
// The Account model
var Account =require('./models/account'));
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//Get the default connection


// We can seed the collection if needed on server start
 async function recreateDB(){
// Delete everything
  await Shoe.deleteMany();
let instance1 = new Shoe({shoeName:"Adidas", shoePrice: 100,
shoemadein:'US'});
instance1.save().then( () => {
  console.log('First Object is created');
}).catch( (e) => {
  console.log('There was an error', e.message);
});

let instance2= new Shoe({shoeName:"puma", shoePrice: 50,
shoemadein:'canada'});

instance2.save().then( () => {
  console.log('second Object is created');
}).catch( (e) => {
  console.log('There was an error', e.message);
});

let instance3 = new Shoe({shoeName:"nike", shoePrice: 70,
shoemadein:'austarlia'});
instance3.save().then( () => {
  console.log('third Object is created');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
}
let reseed = true;
if (reseed) { recreateDB();}

module.exports = app;





