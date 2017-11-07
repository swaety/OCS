// contoller.js and smartil.js
const mqtt = require('mqtt')
var moment = require('moment')
const client = mqtt.connect('mqtt://broker.hivemq.com')
var nodemailer = require('nodemailer');
/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/smartil');
/*var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://admin:admin123@localhost:27017/smartildb', function(err, db) {
    if (err) {
        console.error(err);
    }
    var collection = db.collection('collectionName');
    collection.find().toArray(function(err, docs) {
        console.log(docs);
    });
});
var url = 'mongodb://localhost:27017/smartildb';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server."); 
});
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/smartildb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //Create a collection name "customers":
  db.createCollection("smartils", function(err, res) {
    if (err) throw err;
    console.log("Smartil Collection created!");
    db.close();
  });
});*/

/*const idSmartil1 = 1
var buttonState = ''
var letterState = ''
var doorState = ''
var connected = false
var db = mongoose.connection;
var smartilSchema = mongoose.Schema({
    idSmartil: String,
    buttonState: String,
    doorState: String,
    letterState: String,
    timeStamp: String
});
smartilSchema.methods.displayData = function () {
if(this.idSmartil){console.log(this.idSmartil)}
if(this.buttonState){console.log(this.buttonState)}
if(this.doorState){console.log(this.doorState)}
if(this.letterState){console.log(this.letterState)}
if(this.timeStamp){console.log(this.timeStamp)}
}
var smartilModel = mongoose.model('smartilModel',smartilSchema)
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function() {
  // we're connected!
   console.log('connected to database')
});
var smartilStorage = new smartilModel({ 
    idSmartil:'1',
    buttonState:'mongo up',
    doorState:'mongo open',
    letterState:'mongo letter'         
 });*/
//smartilStorage.displayData()
client.on('connect', () => {
  client.subscribe('smartil/connected')
  client.subscribe('smartil/button/state')
  client.subscribe('smartil/door/state')
  client.subscribe('smartil/letter/state')
})

client.on('message', (topic, message) => {
  switch (topic) {
    case 'smartil/connected':
      return handleSmartilConnected(message)
    case 'smartil/button/state':
      return handleButtonState(message)
    case 'smartil/letter/state':
      return handleLetterState(message)
    case 'smartil/door/state':
      return handleDoorState(message)
  }
  console.log('No handler for topic %s', topic)
})

/*function handleSmartilConnected (message) {
  console.log('smartil connected status %s', message)
 connected = (message.toString() === 'true')
  var smartilStorage = new smartilModel({ 
    idSmartil:idSmartil1,
    buttonState:buttonState,
    doorState:doorState,
    letterState:letterState 
 });
// smartilStorage.displayData()
}
/*function updateDatabase()
{   
    var now = moment()
    var formatted = now.format('YYYY-MM-DD HH:mm:ss Z')
    var smartilStorage = new smartilModel({ 
    idSmartil:idSmartil1,
    buttonState:buttonState,
    doorState:doorState,
    letterState:letterState,
    timeStamp:formatted
    });
     console.log('from database')
     //smartilStorage.displayData()
     console.log('from database')
     smartilStorage.save(function (err,smartilStorage) {
     if (err) return console.error(err);
       smartilStorage.displayData();
      });
     smartilModel.find(function (err, smartilModels) {
     if (err) return console.error(err);
       console.log(smartilModels);
      })

}*/
function handleButtonState (message) {
  buttonState = message
  console.log('button state update to %s', message)
  //updateDatabase()
}
function handleLetterState (message) {
  letterState = message
  console.log('letter state update to %s', message)
 // updateDatabase()
  sendNewLetter()
}
function handleDoorState (message) {
  doorState = message
  console.log('door state update to %s', message)
 // updateDatabase()
}
function sendNewLetter(){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'smartil.polytech@gmail.com',
    pass: 'Sm@rtil1'
  }
});
var mailOptions = {
  from: 'smartil.polytech@gmail.com',
  to: 'ibrahim.abdelkader@esprit.tn',
  subject: 'Smartil - New letter received ',
  html: '<h1>New Letter</h1><p>You have got new letter in your mailbox</p>'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  });
}
