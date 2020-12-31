const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get("/", function(req, res){
    controller.getMessages()
        .then((messegeList) => {
            response.suceess(req, res, messegeList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
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