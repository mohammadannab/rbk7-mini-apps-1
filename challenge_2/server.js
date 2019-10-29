
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client'));


app.get('/RP', function (req, res) {
	res.sendfile('index.html');
});

app.post('/RP', function (req, res) {
  // res.sendfile('index.html');
  var change = (req.body.data);
  console.log (req.body.data);
  res.end("your data is being converted to CSV");
});





app.listen(3000, function(){
  console.log("port 3000 is awesome!")
});