const express = require('express')
const router = express.Router()
const User = require('./model/userSchems')


router.post('/users',(req,res)=>{
    const {name,email,password}= req.body;
try{
    const newUser = new User(
        {name,email,password});
        newUser.save();
        res.status(201).send(
            {message:"User Created",newUser});
        }

})