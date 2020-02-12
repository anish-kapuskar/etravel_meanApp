const User = require('../models/invoice');
const express = require('express');
const router = express.Router();
const config = require('../config/database.config')
const salt = bcrypt.genSaltSync(10);
const userService = require('../services/userService')



exports.create = (req,res) => {
    console.log(req.body.userName);
    console.log("inside create user");

    const user = new User({
        userName : req.body.userName,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    });
    // user.save().
    // then(() => {
    //     res.send({'message':'User created successfully'});
    // });
    
    userService.addUser(user, (err, user) =>{
        console.log("called add user");
        if(err){
           res.json({success: false, msg: "Failed to register user!"});
        
        }
        else{
            res.json({success: true, msg: "User is registered!"});
         }

    });  
};


exports.getUser = (req,res) => {

    const userName = req.body.userName;
   const password = req.body.password;

    userService.getUserByEmail(userName, (err, user) => {
       if(err) throw err;
       if (!user){
           return res.json({success :false,  msg:'User not found!' });
       }

     userService.comparePassword(password, user.password ,(err, isMatch) =>{
           console.log("inside node compare function");
           if(err) throw err;
           if(isMatch)
           {
               const token = jwt.sign(user.toJSON(), config.secret, {

                   expiresIn: 604800

               });

               res.json({
                   success: true,
                   token: 'JWT '+token,
                   user: {
                       id:user._id,
                       firstName: user.firstName,
                       lastName: user.lastName,
                       userName: user.userName
                   }
               });
           }else {
               return res.json({success :false , msg: 'Incorrect password!'});

           }
       });
   });


    //    var userName= req.params.userName;
    //    var password= req.params.password;

    //    var query = {userName: userName, password: password};

    // User.find(query,(error,user) => {
    //     if(!user || error){
    //         // alert("User Error");
    //         res.status(401).send({'message':'Invalid Username/Password'});
    //     }else{
    //         // alert("User Logged In");
    //         // res.send({'user':user});
    //         // return res.redirect('http://localhost:4200/signup');
    //     }
    // })
};



exports.delete = (req,res) => {
    User.findOneAndRemove(req.params.userName).
    then(user => {
        res.send({'message':'user deleted successfully'});
    }); 
};

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};