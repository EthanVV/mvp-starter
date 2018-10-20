var express = require('express');
var bodyParser = require('body-parser');
var tasks = require('../database-mongo');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

let exampleTask = {
  name: 'exampleTask',
  blocks: [{name: 'firstThing', time: '2 hours'}, {name: 'secondThing', time: '4 minutes'}]
}

app.get('/tasks',(req, res) => {
  let data = 'temp';

  tasks.db.deposite(exampleTask, function() {
    if (err) {
      console.log(err);
      throw(err);
    } else {
      console.log('insert sucessful');
    }
  });

  tasks.db.selectAll(function(err, data) {
    console.log('DATA FROM MONGO:', data);
    if (err) {
      res.sendStatus(500);
    } else {
      data = res.json(data);
    }
  });



});

app.patch('/tasks', (req, res) => {
  let taskEntry = req.body;
  console.log(taskEntry);

  res.sendStatus(200);
});

// remove 
app.patch('/', function(req, res) {
  let newTask = req.body;
  console.log(newTask);
  res.sendStatus(200); //temp
});

// practice testing via postman
// write several methods needed or not to practice with callbacks

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

