var express = require('express');
var app = express();
var MongoClient = require("mongodb");


const path = require('path');
const PORT = process.env.PORT || 5000

var MONGOLAB_URI = "mongodb://test:test123@ds233452.mlab.com:33452/subscription-datastore";

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

MongoClient.connect(MONGOLAB_URI, function(err, db){
	if(err){
		console.log(err);
	}
	console.log(db);
	const myAwesomeDB = db.db('subscription-datastore');
	var query = {eid : "1234567"};
	var cursor = myAwesomeDB.collection('Subscription').find(query);
	cursor.each(function(err, doc){
		if(doc){
			console.log(doc);
		console.log("data found");
		}
		
	});
});
  res.send(JSON.stringify({ data: { success: true } }));
});

app.listen(PORT, () => console.log('Listening on ${ PORT }'));