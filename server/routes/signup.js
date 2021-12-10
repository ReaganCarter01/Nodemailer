const Db = require('../index');
const express = require('express');
const mysql = require ('mysql');
const {body, validationResult} = require('express-validator');
const signupRouter = express.Router();

if(Db){
    console.log("working");
}
signupRouter.get('/signup',(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log('here2');

})


signupRouter.post('/signup',(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    Db.query('INSERT INTO users (username,password) VALUES (?,?)',
        [username, password],
        (err, result) => {
            console.log(username);
            console.log(err);
         result.send(res);
            if(err){
                result.send(404);
            }
        });
})


module.exports = signupRouter;