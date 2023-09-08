let configure = require("../../config/db_configure2");
let mysqli = require('mysql');
config = require("../../config/auth.config");


exports.create = (req,res) => {
    if(req.body.initial == 'Create BC'){
        var NewBC = (Math.random() + 1).toString(36).substring(5);
        var timenow = new Date().toLocaleString('sv-SE',{ timeZone: 'Asia/Jakarta' });
        var sql = "INSERT INTO t_barcodes(barcode_id,RecordedBy,createdAt,updatedAt) values ('"+NewBC+"','"+req.body.nik+"','"+timenow+"','"+timenow+"')";
        let connection = mysqli.createConnection(configure);
        connection.query(sql, (error, results) => {
            if (error){
                res.status(500).send({ message: error.message });
            }
            if(results.affectedRows > 0){
                res.status(200).send({ 
                    barcode_id: NewBC
                });
            }
            else{
                res.status(500).send({ message: 'Failed to create barcode' });
            }
        });
        
        connection.end();
    }
    else{
        res.status(500).send({ message: 'Failed to create barcode' });
    }
};