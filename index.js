var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.set("views", __dirname + '/views');
app.set("view engine", 'ejs');

io.on('connection', function(socket){
  console.log("connected");
  socket.on("new-message", function(msg){
    io.emit('receive-message', msg);
  })
  socket.on("test", function(){
    console.log("mounted")
  });
});

app.get("/", function(req, res){
  res.render("index");
});

http.listen(3000, function(){
  console.log("Server started");
});
