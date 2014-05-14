'use strict';
const
  zmq = require('zmq'),
  filename = process.argv[2],
  requester = zmq.socket('req');

requester.connect('tcp://localhost:5433');

console.log('Sending request for ' + filename);
requester.send(JSON.stringify({
  path: filename
}));

requester.on('message', function(data) {
  let response = JSON.parse(data);
  console.log('Received response:', response);
});
