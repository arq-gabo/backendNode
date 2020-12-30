const express = require("express");
const bodyParser = require("body-parser");

const response = require("./network/response");

//const router = require("./components/message/network");
const router = require("./network/routes");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

app.use("/app", express.static('public'));

app.listen(3000);
console.log("la aplicación esta escuchando en http://localhost:3000");