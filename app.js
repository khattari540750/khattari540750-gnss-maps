var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.end('Hello Nodejs!');
//   var stream = fs.createReadStream('index.html');
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   stream.pipe(res);
});
var io = require('socket.io').listen(server);
server.listen(process.env.PORT || 8000);

