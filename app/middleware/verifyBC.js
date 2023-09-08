let configure = require("../../config/db_configure2");
let mysqli = require('mysql');

checkBarcode = (req, res, next) => {
    let connection = mysqli.createConnection(configure);
    var sql1 = "SELECT COUNT(*) as num FROM t_barcodes WHERE barcode_id = '"+req.body.barcode_id+"'";
    connection.query(sql1, (error, results) => {
        if (error){
            res.status(500).send({ message: error.message });
            connection.end();
            return;
        }
        if(results[0].num != '0'){
            connection.end();
            next();
        }
        else{
            res.status(500).send({ message: "Barcode Not Found" });
            connection.end();
            return;
        }
    });
};
const verifyBC = {
    checkBarcode: checkBarcode
};

module.exports = verifyBC;