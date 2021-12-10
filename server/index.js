const mysql = require ('mysql');
const cors  = require("cors");
const express = require ('express');
const app = express();


app.use (express.json());
app.use(cors());
const port =  8080;
app.listen(port);
console.log(`listening on port ${port}`);



    const Db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'test'
    })
    if (Db) {
        Db.connect();
        console.log("DATABASE WORKING")

    } else {
        console.log("DATABASE ERROR")
    }
const initDataBase = async () => {
    if (Db) {
        console.log("DATABASE WORKING")

    } else {
        console.log("DATABASE ERROR")
    }
}

initDataBase().then(()=>{
    app.use(require('./routes/signup'));
    app.use(require('./routes/email'));
})

module.exports = Db;