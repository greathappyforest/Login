var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('passportapp', ['users']);
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



// Register Page - GET
router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {
    console.log('1212');
    //----------------vaildation Adding-----------------------------------------------------
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;


    req.checkBody('name', 'name can not be empty.').notEmpty();
    req.checkBody('name', 'You must enter a vaild name.').isAlpha();
    req.checkBody('email', 'email can be be empty').notEmpty();
    req.checkBody('email', 'You must enter a vaild email address').isEmail();
    req.checkBody('username', 'User name can not be empty').notEmpty();
    req.checkBody('password', 'password can not be empty').notEmpty();
    req.checkBody('password', 'Lenth of password must more than 6 character.').len(6, 20);
    req.checkBody('password2', 'Confirm password can not be empty').notEmpty();
    req.checkBody('password2', 'Confirm password must be the same as password you entered').equals(password);

    var errors = req.validationErrors();
    //   console.log(errors);
    if (errors) {
        console.log('Register vaildation failed');
        // do something with the errors
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            username: username,
            password: password,
            password2: password2
        });


    } else {
        var newUser = {
            name: name,
            email: email,
            username: username,
            password: password
        };

        console.log('Register vaildation passed!');

    }


    //-------------------------------------------------------------------------------------

});

// Login Page - GET
router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', function(req, res) {
    //----------------vaildation Adding-----------------------------------------------------
    var username = req.body.username;
    var password = req.body.password;
    req.checkBody('username', 'Username can not be empty.').notEmpty();
    req.checkBody('password', 'Password can not be empty.').notEmpty();
    req.checkBody('password', 'You must enter a vaild password.').len(6, 20);
    var errors = req.validationErrors();
    //console.log(errors);
    if (errors) {
        console.log('Login vaildation failed');
        // do something with the errors
        res.render('login', { errors });


    } else {

        console.log('Login vaildation passed!');
    }



    //-------------------------------------------------------------------------------------
});

module.exports = router;
