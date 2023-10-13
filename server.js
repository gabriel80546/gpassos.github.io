#!/usr/bin/env node

var http = require('http');
const porta = 8000;

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

console.log(`rodando servidor na porta: ${porta}`);
server.listen(porta);