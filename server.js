// server.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path');

var getData = require('./src/readSubjectFromDB')
var chapterData = require('./src/readChapterFromDB')

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/nodelib', express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/subjectContent', function(req, res) {
  console.log('got subject request ');
    if(req.query && req.query.name){
      res.render('pages/subjectContent', getData(req.query.name));
    }
});

app.get('/edit', function(req, res) {
  console.log('got edit content');
  console.log(req.query);
    if(req.query && req.query.subjectId && req.query.chapterId){
      var value = chapterData(req.query.subjectId,req.query.chapterId);
      res.render('pages/editor', value);
    }
});

var port = 1234;

app.listen(port);
console.log('Note editor running on', port);
