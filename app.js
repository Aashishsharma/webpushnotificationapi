var express = require('express');
var app = express();


const path = require('path');
const PORT = process.env.PORT || 5000
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://pujac70:raipur$77@ds233452.mlab.com:33452/subscription-datastore");

var keysSchema = new Schema ({
	p256dh: String,
	auth: String
})

var saveSubscriptionSchema = new mongoose.Schema({
 endpoint: String,
 expirationTime: String,
 keys: [keysSchema]
});

var SaveSubscriptionModel = mongoose.model("SaveSubscriptionModel", saveSubscriptionSchema);

app.get('/ashish', function (req, res) {
   res.send('Hello World');
})


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());




app.post('/api/save-subscription/', function (req, res) {
  console.log('Inside save subscription');
  console.log(req.body.endpoint);
  SaveSubscriptionModel.findById("5b86650ffb6fc03893e4e567", function ( err, todo ) {
  	 console.log("ID retrieved from Mongo:"+todo);
      res.json(200, todo);
    });

  res.send(JSON.stringify({ data: { success: true } }));
});

app.listen(PORT, () => console.log('Listening on ${ PORT }'));