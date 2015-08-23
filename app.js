var express = require('express');
var path = require("path");
var arduino = require("./Arduino");

var app = express();

app.use("/", express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/arduino', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/ligarLedVermelho', function (req, res) {
  	arduino.desligarTodosLeds();
  	arduino.ligarLedVermelho();
  	res.sendFile(__dirname + '/public/index.html');
});

app.get('/ligarLedVerde', function (req, res) {
	arduino.desligarTodosLeds();
	arduino.ligarLedVerde();
  	res.sendFile(__dirname + '/public/index.html');
});

app.get('/ligarLedAmarelo', function (req, res) {
  	arduino.desligarTodosLeds();
  	arduino.ligarLedAmarelo();
	res.sendFile(__dirname + '/public/index.html');

});

app.get('/piscarLedVermelho', function (req, res) {
  	arduino.pararTodosLeds();
  	arduino.piscarLedVermelho();
  	res.sendFile(__dirname + '/public/index.html');
});

app.get('/piscarLedVerde', function (req, res) {
	arduino.pararTodosLeds();
	arduino.piscarLedVerde();
  	res.sendFile(__dirname + '/public/index.html');
});

app.get('/piscarLedAmarelo', function (req, res) {
  	arduino.pararTodosLeds();
  	arduino.piscarLedAmarelo();
	res.sendFile(__dirname + '/public/index.html');

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
