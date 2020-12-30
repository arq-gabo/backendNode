const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get("/", function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado"
    });
    response.suceess(req, res, 'Lista de Mensajes');
});

router.post("/", function(req, res){
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.suceess(req, res, fullMessage, 201);            
        })
        .catch(e => {
            response.error(req, res, 'Información Invalida', 400, 'Esto en el controlador');
        })
});

module.exports = router;