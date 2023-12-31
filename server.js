const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to mdfk mssql." });
});
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/barcode.routes')(app);
require('./app/routes/transaction.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}.`);
});