'use strict';

const tftp = require('tftp');
const option = require('./config');


// [options], listening handler
const server = tftp.createServer (option);

console.log('opt: ');
console.log(option);

server.on('error', function (err) {
  console.error('Error: ');
  console.error(err);

  switch (err.code) {
    case 'EACCES':
      console.error('Requires elevated privilages');
      break;
    default:
      throw err;
  }
});

//server.on('request', function (req, res)
server.on('request', function (req) {
//about();
//close();
  console.log('start stream');
  
  
  console.log('method: ' + req.method);
  console.log('file: ' + req.file);
  console.log('remote: ' + req.stats.remoteAddress);
  
  //req.on ('error', function (err) {
  req.on ('error', function () {
    console.error('error on req');
  });
  
  console.log('end stream');
});

server.on('listening', function (){
  console.log('listen event');
});

server.on('close', function (){
  console.log('closed');
});



server.listen();

