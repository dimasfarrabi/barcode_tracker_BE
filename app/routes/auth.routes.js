const controller = require("../controllers/auth.controller");
module.exports = function(app) {
    app.post("/api/v1/auth", controller.auth);
};