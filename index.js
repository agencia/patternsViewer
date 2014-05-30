var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.get('/addpin', function(req, res){
  res.sendfile('addpin.html');
});

io.on('connection', function(socket){
  socket.on('addpin', function(msg){
    io.emit('getpin', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});