var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/loc8r';
require('./location');

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('Mongoose Connected to '+ dbURI);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose Connection error', err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose Disconnected');
});

var closeConex = function(msg, callback){
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg );
    callback();
  });
}


process.once('SIGURS2', function(){
  closeConex('nodemon restart', function(){
    process.kill(process.pid, 'SIGURS2');
  });
});

process.on('SIGINT', function(){
  closeConex('app termination', function() {
    process.exit(0);
  });
});

process.on('SIGTERM', function(){
  closeConex('Heroku app shutdown', function(){
    process.exit(0);
  });
});
