const express = require('express');
const multer = require('multer');
const path = require('path');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const { config } = require('../../config');

const storage = multer.diskStorage({
    destination: "public" + config.filesRoute,
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
});

router.get("/", function(req, res){

    const filterMessages = req.query.chat || null;

    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.suceess(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.post("/", upload.single('file'), function(req, res){    
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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