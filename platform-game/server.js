require(__dirname + '/resources/config.js');
var fs = require('fs');
var net = require('net');

// load initializers
// load data models
// load game map data
// initiate the server and listen

var init_files = fs.readdirSync(__dirname + "/initializer");
init_files.forEach(function(initFile) {
  console.log("loading initializer: " + initFile);
  require(__dirname + "/initializer/" + initFile);
});


var model_files = fs.readdirSync(__dirname + "/models");
model_files.forEach(function(modelFile) {
  console.log("loading model: " + modelFile);
    require(__dirname + "/models/" + modelFile);
});


maps = {};
var map_files = fs.readdirSync(config.data_paths.maps);
map_files.forEach(function(mapFile) {
  console.log("loading map: " + mapFile);
  var map = require(config.data_paths.maps + mapFile);
  maps[map.level] = map;
});

net.createServer(function(socket) {
  console.log("socket connected");
  //error
  socket.on('error', function(err) {
    console.log("socket error " + err.toString());

  });
  //end
  socket.on('end', function(err) {
    console.log("socket closed");

  });
  //data
  socket.on('data', function(err) {
    console.log("socket data" + data.toString());

  });

}).listen(config.port);

console.log("server listening on port: " + config.port + " for environment: " + config.environment);
