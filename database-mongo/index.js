var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var taskSchema = new mongoose.Schema({
  name: String,
  blocks: []
});

var Task = mongoose.model('Task', taskSchema);

var deposite = function(item, callback) {
  var holder =  Task(item);

  holder.save();
};

var selectAll = function(callback) {
  Task.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.db = {deposite, selectAll};