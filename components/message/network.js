const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get("/", function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado"
    });
    response.suceess(req, res, 'Lista de Mensajes');
});

router.post("/", function(req, res){
    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error Inesperado', 500, 'Es solo una simulación de errores');
    } else {
        response.suceess(req, res, 'Creado Correctamente', 201);
    }
});

module.exports = router;