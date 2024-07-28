// "Require" packages for starting a server
var express = require('express');   // Used for routing
var app = express();
var http = require('http').Server(app); // Used to provide http functionality

// Allow files to be hosted into a public folder in the server
app.use(express.static(__dirname + '/www'));

// Start the server
let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First NodeJS Server!");
    console.log("Server listening on: " + host + "port: " + port);
});

app.get('/text', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
});