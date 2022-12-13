const querystring = require('querystring');
const http = require('http');
const url = require('url');
const fs = require('fs');

const game = require('./game')

let playerWon = 0;

let playerLastAction = null;

let sameCount = 0;

http.createServer(function(request, response){
  const parsedUrl = url.parse(request.url);

  if(parsedUrl.pathname == '/favicon.ico'){
    response.writeHead(200);
    response.end();
    return;
  }
  if(parsedUrl.pathname === '/game'){
    const query = querystring.parse(parsedUrl.query);
    const playerAction = query.action;
    const gameResult = game(playerAction);
    console.log(game(playerAction));

    response.writeHead(200);
    if(gameResult == 0){
      
    }
    response.end()
  }
  if(parsedUrl.pathname == '/'){
    fs.createReadStream(__dirname+'/index.html').pipe(response);
  }
}).listen(3000)