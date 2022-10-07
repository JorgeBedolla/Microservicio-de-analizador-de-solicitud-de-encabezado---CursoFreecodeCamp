require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.enable('trust proxy');
app.get('/api/whoami', function(req, res){
  res.json({
    "ipaddress" : req.ip,
    "language" : req.get('Accept-Language') ,
    "software" : req.get('User-Agent')
  })
});



// Configuramos el puerto
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('La aplicacion se esta ejecutando en el puerto: ' + listener.address().port);
});
