const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res){
    controller.getAllUsers()
        .then((users) => {
            response.suceess(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err);
        })
})

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then(data => {
            response.suceess(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err);
        })
})

module.exports = router;