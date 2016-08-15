var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cbroomhead',
  password: '',
  database: 'reddit'
});

app.use(express.static(__dirname + '/public'));

var finders = require('./src/js/api/finders');
var FindersAPI = finders(connection);

/* insert any app.get or app.post you need here */

/*
This says: for any path NOT served by the middleware above, send the file called index.html instead.
For example, if the client requests http://server/step-2 the server will send the file index.html, which will start the same React app.
This will enable us to do url-based routing on the front-end.
*/
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, function() {
  console.log('Server started');
});

app.get('/', function (req, res){
  console.log("do I get here");
   console.log(req.query)
  FindersAPI( req.query, function (err, items) {
    if (err){
      console.log(err.stack);
      res.sendStatus(403).send("Try again later");
    }
    else {
      res.send("some html");
      console.log("some html");
    }
  })
  
});
