var express = require('express'),
    swig = require('swig');

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+ '/views');

app.get('/', function(req,res){
  var nombre = new Object();
  nombre.primerNombre = "Alejandro ";
  nombre.apellido = "Orduño";

  var numero1 = 4;
  var numero2 = 8;

  var paises = ["México", "China", "Canada", "Papua Nueva Guinea"];

  res.render('index', {nombre, numero1, numero2, paises});

});

app.listen(8080);
console.log('servidor corriendo en el puerto 8080')
