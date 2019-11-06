//Initializing our packages from nnpm
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//view engine setup
/**
 * 1. register our view engine
 * 2. define the path to our view engine
 * 3. tell expressJS what template engine to use
 */

//app.engine
app.set('views', path.join(__dirname, 'views'));//2
app.set('view engine', 'ejs');//3

/**
 * Server Configuration
 */
app.use(bodyParser.urlencoded({exended:true}) )
app.use(bodyParser.text() );
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Gives the client access to ...?
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes / Controller
 */

const homeController = require('./controllers/home');
app.use('/', homeController);


/**
 * Start the darn Server
 */
app.listen(777)