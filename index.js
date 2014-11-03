var express = require('express');
var app = express();

var portNumber = process.argv[2] || 3000;


//help from Karl and Scott!
app.use(express.static(__dirname + "/lib"));

app.listen(portNumber);
console.log("The server is listening on port " + portNumber);
