var express = require('express');
var app = express();

// GET /style.css etc
app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/hello', function(req, res) {
  res.send('hello world from server.js');
});

app.listen(port, ipaddress);