const controller = require("../controllers/barcode.controller");
module.exports = function(app) {
    app.post("/api/v1/barcode/create", controller.create);
};