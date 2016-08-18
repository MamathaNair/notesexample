// server.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path');

var getData = require('./src/readDataFromDB')

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/nodelib', express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/saveData', function (req, res) {
  functionToLoadDataFromDatabase(function(divData, userData) {
    // this is the callback
    res.render('index.html', {
      layout: false,
      divData: divData,
      userData: userData
    });
  });
});

app.get('/subjectContent', function(req, res) {
  console.log('got subject request ');
  console.log(req.query);
    if(req.query && req.query.name){
      res.render('pages/subjectContent', getData(req.query.name));
    }
});

app.get('/about', function(req, res) {
    res.render('pages/about', getData());
});
// about page
app.get('/editor', function(req, res) {
    res.render('pages/editor', getData());
});

var port = 1234;

app.listen(port);
console.log('Note editor running on', port);
