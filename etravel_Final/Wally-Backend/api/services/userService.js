const User = require('../models/usermodel');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/database.config');

exports.addUser = function(newUser, callback){
    console.log("add user function ..... creating user");
    bcrypt.genSalt(10, (err, salt) => {
 
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;

            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

exports.comparePassword = function(candidatePassword, hash , callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    
       if(err) throw err;
       callback(null, isMatch);
    
    });
}

exports.getUserByEmail = function(userName, callback){
    const query = {userName: userName}
   User.findOne(query, callback);

};

exports.getUserById = function(id, callback){

    User.findById(id, callback);
 
 };

