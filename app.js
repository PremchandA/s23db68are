var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shoe', shoeRouter);
app.use('/board', boardRouter);
app.use('/resource',resourceRouter);
app.use('/selector', selectorRouter);
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});




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

module.exports = app;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
 function recreateDB(){
// Delete everything
 Shoe.deleteMany();
let instance1 = new
Shoe({shoeName:"Adidas", shoePrice: 100,
shoemadein:'US'});
let instance2= new
Shoe({shoeName:"puma", shoePrice: 50,
shoemadein:'canada'});
let instance3 = new
Shoe({shoeName:"nike", shoePrice: 70,
shoemadein:'austarlia'});



instance1.save().then( () => {
  console.log('First Object is created');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
instance2.save().then( () => {
  console.log('second Object is created');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
instance3.save().then( () => {
  console.log('third Object is created');
}).catch( (e) => {
  console.log('There was an error', e.message);
});

}
let reseed = true;
if (reseed) { recreateDB();}

