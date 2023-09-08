const { verifyBC } = require("../middleware");

const controller = require("../controllers/transaction.controller");
module.exports = function(app) {
    app.post("/api/v1/transaction/input",[ verifyBC.checkBarcode ], controller.create);
};