let configure = require("../../config/db_configure2");
let mysqli = require('mysql');


exports.create = (req,res) => {
    var timenow = new Date().toLocaleString('sv-SE',{ timeZone: 'Asia/Jakarta' });
    var sql = "INSERT INTO t_cnc_logs (process_type, transaction_type, transact_by, createdAt, updatedAt) VALUES ('"+req.body.location+"','"+req.body.transaction+"','"+req.body.nik+"','"+timenow+"','"+timenow+"')";
    let connection = mysqli.createConnection(configure);
    connection.query(sql, (error, results) => {
        if (error){
            res.status(500).send({ message: error.message });
        }
        if(results.affectedRows > 0){
            res.status(200).send({ 
                barcode_id: req.body.barcode_id,
                location: req.body.location,
                transact: req.body.transaction,
                operator: req.body.operator,
                status: 'SAVED'
            });
        }
        else{
            res.status(500).send({ message: 'Process Failed' });
        }
    });
    
    connection.end();
};