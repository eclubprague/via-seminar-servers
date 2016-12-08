// Express initialization
var express = require('express');
var app = express();

var cors = require('cors');
var dateFormat = require('dateformat');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Hello World
app.get('/', function (req, res) {
    res.send('Hello World!');
});


// Exercise 1
app.get('/date', cors(), function (req, res) {
    var data = {};
    data.date = dateFormat(new Date(), 'dd.mm.yyyy');
    res.send(JSON.stringify(data));
});

app.get('/time', cors(), function (req, res) {
    var data = {};
    data.time = dateFormat(new Date(), 'HH.MM.ss');
    res.send(JSON.stringify(data));
});

app.get('/datetime', cors(), function (req, res) {
    var data = {};
    data.date = dateFormat(new Date(), 'dd.mm.yyyy');
    data.time = dateFormat(new Date(), 'HH.MM.ss');
    res.send(JSON.stringify(data));
});


// Exercise 2
app.post('/echo', cors(), function (req, res) {
    res.send('Message "' + req.body.message + '" from ' + req.body.author + '!');
});


// Serving static files
app.use('/static', express.static('public'));


// Start server
app.listen(8088, function () {
    console.log('Example app listening on port 8088!');
});
