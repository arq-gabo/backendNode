const express = require("express");
var app = express();
const server = require('http').Server(app);

const bodyParser = require("body-parser");
const socket = require('./socket');
const db = require("./db");
const router = require("./network/routes");

const { config } = require('./config');
db(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use("/app", express.static('public'));

server.listen(3000, function(){
    console.log("la aplicación esta escuchando en http://localhost:3000");
} );