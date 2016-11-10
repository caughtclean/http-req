var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         console.log(error)
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode, response.headers['content-type']);

       })
       .pipe(fs.createWriteStream('./future.jpg'));
       console.log('Downloading image...');
       console.log("download complete!")