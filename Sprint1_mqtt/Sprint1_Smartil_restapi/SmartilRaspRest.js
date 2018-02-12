var http = require('http');
var express = require('express');
var GrovePi = require('node-grovepi').GrovePi;
var Commands = GrovePi.commands;
var Board = GrovePi.board;
var DigitalButtonSensor = GrovePi.sensors.DigitalButton;
var testOptions = {digitalButton: true};
var app = express();
var inputs  = [{ pin: 'Button',port: '3', value: 'up' }];
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



app.use(express['static'](__dirname ));
// Express route for incoming requests for a customer name

app.get('/inputs/:id', function(req, res) {
console.log('recieved API request for button status' + req.params.id);
        if (req.params.id == 3){res.send(inputs[0]);}
  });
 app.get('/inputs', function (req, res) {
         // send array of inputs objects as a JSON string
        console.log('all inputs');
        res.status(200).send(inputs);
  }); // apt.get()
  // Express route for any other unrecognised incoming requests
  app.get('*', function(req, res) {
    res.status(404).send('Unrecognised API call');
  });
  // Express route to handle errors
  app.use(function(err, req, res, next) {
    if (req.xhr) {
      res.status(500).send('Oops, Something went wrong!');
    } else {
      next(err);
    }
  });
app.listen(3000);
console.log('App Server running at port 3000');
