const Invoice = require('../models/invoice');
const express = require('express');
const router = express.Router();
const config = require('../config/database.config');


exports.addInvoice = function(Invoice, callback){
    console.log("add Id function ..... creating Id");
    
    Invoice.name
}

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


exports.getInvoiceById = function(id, callback){
    const query = {id: id}
   Invoice.findOne(query, callback);

};


