var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('passportapp', ['users']);
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Login Page - GET
router.get('/login', function(req, res) {
    res.render('login');
});

// Register Page - GET
router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {

    console.log('12121');

});

module.exports = router;
