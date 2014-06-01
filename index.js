var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.get('/addpin', function(req, res){
  res.sendfile('addpin.html');
});

app.get('/setpin', function(req, res){
  io.emit('getpin', req.query['pin']);
  console.log("emited: " + req.query['pin']);
});

io.on('connection', function(socket){
  socket.on('addpin', function(msg){
    io.emit('getpin', msg);
  });
});

http.listen(80, function(){
  console.log('listening on *:80');
});