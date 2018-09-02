var https = require('https');



var options = {
    host: 'www.example.org',
    path: '/'
  };
  
  // called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
      console.log(chunk.toString());
    });
  }

  https.request(options, callback).end();