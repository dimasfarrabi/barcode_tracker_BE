let configure = require("../../config/db_configure2");
let mysqli = require('mysql');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const config = require("../../config/auth.config");


exports.auth = (req,res) => {
    var pwd = req.body.password;
    const encodedStr = Buffer.from(pwd).toString('base64');
    var Passwords = encodedStr;
    var sql = "SELECT * FROM t_employees WHERE nik = '"+req.body.nik+"' AND password = '"+Passwords+"'";
    let connection = mysqli.createConnection(configure);
    connection.query(sql, (error, results) => {
        if (error){
            res.status(500).send({ message: error.message });
        }
        if(results.length > 0){
            var token = jwt.sign({ id: results[0].id }, config.secret, {
                expiresIn: 86400 
            });
            res.status(200).send({ 
                nik: results[0].nik,
                divisi: results[0].division,
                accessToken: token
            });
        }
        else{
            res.status(200).send({ message: 'Account Not Found' });
        }
    });
    
    connection.end();
};