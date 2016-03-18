var express = require('express');
var app = express();

// GET /style.css etc
app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/hello', function(req, res) {
  res.send('hello world from server.js again');
});

app.get('/user', function(req, res) {
   var users = [
       {username: "alice", firstname: "Alice", lastname: "Wonderland"},
       {username: "bob", firstname:"Bob", lastname: "Smith"},
       {username: "jim", firstname: "Jim", lastname: "Tan"}
   ];

    res.json(users);
});

app.listen(port, ipaddress);