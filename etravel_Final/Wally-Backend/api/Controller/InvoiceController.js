const Invoice = require('../models/invoice');
const express = require('express');
const router = express.Router();
const config = require('../config/database.config')
const salt = bcrypt.genSaltSync(10);
const invoiceService = require('../services/invoiceService')



exports.create = (req,res) => {
    console.log(req.body.userName);
    console.log("inside create user");
    
    const invoice = new invoice({
        name : req.body.name,
        details : req.body.details,
        price : req.body.price,
        departure : req.body.departure,
        select : req.body.select,
        id : req.body.id
    });
    
    
    invoiceService.addInvoice(invoice, (err, invoice) =>{
        console.log("called add user");
        if(err){
           res.json({success: false, msg: "Failed to register Invoice!"});
        
        }
        else{
            res.json({success: true, msg: "Invoice is registered!"});
         }
    });
    
};


exports.getInvoice = (req,res) => {

    const id = req.body.id;
    invoiceService.getInvoiceById(id, (err, invoice)) => {
        if(err) throw err;
       if (!id){
           return res.json({success :false,  msg:'id not found!' });
    }
     
    
    
    

