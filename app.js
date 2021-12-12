
const express = require('express');
const aplication = express();
const autenticador = require('./middleware/autenticador')


aplication.use((req,res,next) =>{
    console.log(req.headers['user-agent']);
    console.log(req.url);
    console.log(req.method);
    console.log(req.connection.remoteAddress);
    next();
})


//Para enviar un req o una res al servidor
aplication.get('/', function(req, res) {
    res.send('Bienvenido');
  });

aplication.get('/login',function (req,res) {
    res.sendFile(__dirname + "/paginas/login.html"); 
});

aplication.use(autenticador);

aplication.get('/privada', function(req, res) {
    res.send('Bienvenido a privada');
  });


  
  //Para iniciar el servidor
  aplication.listen(8080, function(){
    console.log("Servidor iniciado");
  });