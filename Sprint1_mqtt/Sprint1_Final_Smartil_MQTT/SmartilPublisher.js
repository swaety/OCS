const mqtt = require ('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')
//var PythonShell = require('python-shell')
//var pyshell = new PythonShell('smartil_basic.py')
const ADXL345 = require('adxl345-sensor');
const adxl345 = new ADXL345(); // defaults to i2cBusNo 1, i2cAddress 0x53
var GrovePi = require('node-grovepi').GrovePi;
var Commands = GrovePi.commands
var Board = GrovePi.board
var DigitalButtonSensor = GrovePi.sensors.DigitalButton
var InfraredSensor = GrovePi.sensors.DigitalInput
var AccelerationSensor = GrovePi.sensors.AccelerationI2C
var testOptions = {digitalButton: true}
var inputs = [{ pin: 'Button',port: '3', value: 'up' }]
var buttonSensor = null
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
            infraredSensor = new InfraredSensor(4);
            accelerationSensor = new AccelerationSensor(1);
            console.log('Digital Button Sensor (start watch)');
            buttonSensor.watch();
            infraredSensor.watch();
            accelerationSensor.watch();
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
const getAcceleration = () => {
  adxl345.getAcceleration(true) // true for g-force units, else false for m/s²
    .then((acceleration) => {
      //console.log(`acceleration = ${JSON.stringify(acceleration, null, 2)}`);
      if((acceleration.z > 1)){
      console.log('letter event + ',acceleration.z)
      sendLetterUpdate('letter event')
      }
    /* if (acceleration.z<(0.9)){
        console.log('letter removed', acceleration.z)
        }*/
        //console.log(acceleration.z)
      setTimeout(getAcceleration,20);
    })

    .catch((err) => {
      console.log(`ADXL345 read error: ${err}`);
      setTimeout(getAcceleration, 2000);
    });
};
// Initialize the ADXL345 accelerometer
//
adxl345.init()
  .then(() => {
    console.log('ADXL345 initialization succeeded');
    getAcceleration();
  })
  .catch((err) => console.error(`ADXL345 initialization failed: ${err} `));

infraredSensor.on('change', function(res) {
         console.log('Infrared onChange value=' + res)
         if(res == 0){sendDoorUpdate('door closed')}
         if(res == 1){sendDoorUpdate('door opened')}
        })
/*accelerationSensor.on('vibration',function(res){
        console.log('Acceleration onChange value = ' +res)
        })*/
buttonSensor.on('down', function (res) {
      var value = "down" ;
      inputs[0].value = value;
      //console.log('Button onDown, data=' + res);
      sendButtonUpdate()
});
  buttonSensor.on('up',function (res){
    var value = "up";
    inputs[0].value = value;
    //console.log('Button OnUp, data= ' + res);
    sendButtonUpdate()
});
//pyshell.on('message',function(message){console.log(message)})
client.on('connect',() => {
//iform that smartil is connected
     client.publish('smartil/connected','true')
     console.log('smartil is connected')
     sendButtonUpdate()
})
function sendButtonUpdate(){
 console.log('sending smartil button state %s',inputs[0].value)
 client.publish('smartil/button/state',inputs[0].value)
}
function sendDoorUpdate(door){
 console.log('sending smartil door state %s',door)
 client.publish('smartil/door/state',door)
}
function sendLetterUpdate(letter){
 console.log('sending smartil letter capturing state %s',letter)
 client.publish('smartil/letter/state',letter)
}
