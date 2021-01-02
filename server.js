const express = require("express");
var app = express();
const server = require('http').Server(app);

const cors = require('cors')
const bodyParser = require("body-parser");
const socket = require('./socket');
const db = require("./db");
const router = require("./network/routes");

const { config } = require('./config');

db(config.dbUrl)

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use(`${config.publicRoute}` , express.static('public'));

server.listen(config.port, function(){
    console.log(`La aplicación esta escuchando en el ${config.host}:${config.port}`);
} );