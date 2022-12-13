const querystring = require('querystring');
const http = require('http');
const url = require('url');
const fs = require('fs');

const game = require('./game')

let playerWon = 0;

let playerLastAction = null;

let sameCount = 0;

http.createServer(function(request, response){
  const parsedUrl = new URL(request.url,"http://whatever.com");

  if(parsedUrl.pathname == '/favicon.ico'){
    response.writeHead(200);
    response.end();
    return;
  }
})