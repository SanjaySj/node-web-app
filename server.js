'use strict';

const express = require('express');
var bodyParser = require('body-parser');

// Constants
const PORT = 8080;

// App
const app = express();

app.get('/', function (req, res) {
  res.send('Type /name/yourtext \n');
});

app.get('/name/:text', function (req, res) {
  var name = req.params.text;
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x <name.length ; x++)
  {
  if (vowel_list.indexOf(name[x]) !== -1)
  {
  vcount += 1;
  }
  }
  var obj = {
    Name : name , Noofvowels : vcount
  }
   res.json(obj);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

