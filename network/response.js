const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid Format',
    '500': 'Internal Error'
}

exports.suceess = function (req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;
    if(!status){
        status = 200;
    }
    if(!message){
        statusMessage = statusMessages[status]
    }

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = function (req, res, message, status, details) {
    let statusCode = status;
    let statusMessage = message;
    if(!status){
        status = 500;
    }
    if(!message){
        statusMessage = statusMessages[status];
    }

    console.error('[Response Error] ' + details);

    res.status(statusCode).send({
        error: statusMessage,
        body: ''
    });
}