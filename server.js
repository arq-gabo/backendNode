const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

// app.use("/", function(req, res){
//     res.send("Hola");
// })


router.get("/message", function(req, res){
    res.send("Lista de Mensajes")
});

router.post("/message", function(req, res){
    res.send("Mensaje Añadido")
});

router.delete("/message", function(req, res){
    console.log(req.body);
    console.log(req.query);
    res.send("Mensaje Borrado");
});


app.listen(3000);
console.log("la aplicación esta escuchando en http://localhost:3000");