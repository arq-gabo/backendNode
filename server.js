const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const { config } = require('./config');

const router = require("./network/routes");

db(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`)

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

app.use("/app", express.static('public'));

app.listen(3000);
console.log("la aplicación esta escuchando en http://localhost:3000");