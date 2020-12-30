const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./network/response");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get("/message", function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado"
    });
    response.suceess(req, res, 'Lista de Mensajes');
});

router.post("/message", function(req, res){
    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error Inesperado', 500, 'Es solo una simulación de errores');
    } else {
        response.suceess(req, res, 'Creado Correctamente', 201);
    }
});

app.use("/app", express.static('public'));

app.listen(3000);
console.log("la aplicación esta escuchando en http://localhost:3000");