var express = require('express')
var app = express()
var http = require('http')



app.get('/', function(req, res) {
  res.send('hello world');
});

var server = http.createServer(app)

module.exports = server

