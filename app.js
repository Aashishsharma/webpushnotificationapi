var express = require('express');
var app = express();


const path = require('path');
const PORT = process.env.PORT || 5000
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
 
  res.send(JSON.stringify({ data: { success: true } }));
});

app.listen(PORT, () => console.log('Listening on ${ PORT }'));