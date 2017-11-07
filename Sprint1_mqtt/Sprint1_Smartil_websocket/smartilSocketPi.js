var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var url = require('url');
var fs = require('fs');
var express = require('express');
var GrovePi = require('node-grovepi').GrovePi;
var Commands = GrovePi.commands;
var Board = GrovePi.board;
var DigitalButtonSensor = GrovePi.sensors.DigitalButton;
var testOptions = {digitalButton: true};
var inputs = [{ pin: 'Button',port: '3', value: 'up' }];
var buttonSensor = null ;
// ------------------------------------------------------------------------
// read and store the button values
function start(){
    console.log('starting');
    board = new Board({
      debug: true,
      onError: function (err) {
        console.log('TEST ERROR');
        console.log(err);
      },
      onInit: function (res) {
        if (res) {
          console.log('GrovePi Version :: ' + board.version());
          if (testOptions.digitalButton) {
             //Digital Port 3
            // Button sensor
            buttonSensor = new DigitalButtonSensor(3);
            console.log('Digital Button Sensor (start watch)');
            buttonSensor.watch();
          }
          } else
           {
          console.log('TEST CANNOT START');
        }
      }
    })
    board.init();
  
};
start();
buttonSensor.on('down', function (res) {
    var value = "down" ;
    inputs[0].value = value;
    console.log('Button onDown, data=' + res);
});
buttonSensor.on('up',function (res){
  var value = "up";
  inputs[0].value = value;
  console.log('Button OnUp, data= ' + res);
});
//This will open a server at localhost:5000. Navigate to this in your browser.

app.listen(5000); // Http handler function
function handler (req, res) {
    // Using URL to parse the requested URL
    var path = url.parse(req.url).pathname;
    // Managing the root route
    if (path == '/') {
       index = fs.readFile(__dirname+'/public/index.html',
            function(error,data) {
                if (error) {
                    res.writeHead(500);
                    return res.end("Error: unable to load index.html");
                }
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            });
    // Managing the route for the javascript files
    } else if( /\.(js)$/.test(path) ) {
        index = fs.readFile(__dirname+'/public'+path,
            function(error,data) {
                if (error) {
                    res.writeHead(500);
                    return res.end("Error: unable to load " + path);
                }
                res.writeHead(200,{'Content-Type': 'text/plain'});
                res.end(data);
            });
    } else {
        res.writeHead(404);
        res.end("Error: 404 - File not found.");
    }
}
// Web Socket Connection
// Web Socket Connection
io.sockets.on('connection', function (socket) {
    // If we recieved a command from a client to start watering lets do so
  socket.on('get-state', function(data) {
        console.log("state is : " +inputs[0].value);
        delay = data["duration"];
        // Set a timer for when we should stop watering
        setTimeout(function(){
            socket.emit('state',inputs[0]);
        }, delay*1000);
    });
  });
  
  
  
