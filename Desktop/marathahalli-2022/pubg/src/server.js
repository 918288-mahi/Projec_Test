const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

// for creating server connection 
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ipl_details"
});

conn.connect(function(err){
    if(err) 
        throw err;
    console.log('Database connected');
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/Contact', function(req, res){

    
    var username = req.body.user;
    var email=req.body.user;
    var Password=req.body.user;
    var ConfirmPassword=req.body.user;
 
    console.log("contact api called");
    // var inst="INSERT INTO ipl_users (username,email,Password,ConfirmPassword) VALUES ?";
    var inst= `INSERT INTO ipl_users (username,email,Password,ConfirmPassword) VALUES ?`;


    // conn.query('INSERT INTO user SET ?',firstName,lastName,function (error, results) {
        // conn.query('INSERT INTO ipl_users',(username,email,Password,ConfirmPassword),function (error, results) {
            conn.query(inst,[username,email,Password,ConfirmPassword],function (error, results) {

        if (error) {
            console.log(error.message);
        } else {
            console.log('success');    
        }
       
        // return res.send(JSON.stringify(results));
     
    });
});

   app.get('/UserList', function (req, res) {

    conn.query('SELECT * FROM users', function (error, results, fields) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');    
        }
        return res.send(JSON.stringify(results));
    });
});
// app.delete('./DeleteUser:id',function(req,res){

//     conn.query('SELECT FROM users where id=? ',function(error,result,fields){
//         if(erroe){
//             console.log("delecte api is failing");
//         }
//         else{
//             console.log("id is deleted successfully");
//         }
//     })
// })
app.listen(1227);