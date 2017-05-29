var express = require('express');
var path = require('path');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var flash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Define Routes
app.use('/', index);
app.use('/users', users);

app.listen(3000);
console.log('Server started on port 3000');
