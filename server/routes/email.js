const express = require('express');
const emailRouter = express.Router();
const sendMail = require('../mail');

emailRouter.post('/email',(req,res)=>{
    res.json({message: "Message taken"})
    const {subject,email,text} = req.body;
    sendMail(email,subject,text,function(err,data){
        if(err) {
            res.status(500);
        }else{
            res.json({message:'Email sent'});
        }
    })
    console.log("Data:",req.body);
})



module.exports = emailRouter;