const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('publico'));

io.on('connection', function(socket){
    console.log('Nuevo cliente connectado');
    socket.emit('mensaje', 'Bienvenido!!!');
})

setInterval(function(){
    io.emit('Mensaje', 'Hola les escribo a todos')
}, 3000)

server.listen(8080, function(){
    console.log('Servidor iniciado en http://localhost:8080');
});
