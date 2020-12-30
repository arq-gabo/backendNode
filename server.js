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
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado"
    });
    res.send("Lista de Mensajes")
});

router.post("/message", function(req, res){
    res.status(201).send([{error: '', body: 'Creado Correctamente'}]);
    res.send("Mensaje Añadido");
});

router.delete("/message", function(req, res){
    console.log(req.body);
    res.send("Mensaje Borrado");
});


app.listen(3000);
console.log("la aplicación esta escuchando en http://localhost:3000");