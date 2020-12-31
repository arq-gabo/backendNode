const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get("/", function(req, res){

    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
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

router.patch('/:id', function(req, res){

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.suceess(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e);
        });
})

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.suceess(req, res, `Usuario ${req.params.id} Eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e);
        })
})

module.exports = router;