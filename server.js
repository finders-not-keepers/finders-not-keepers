var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cbroomhead',
  password: '',
  database: 'reddit'
});

var finders = require('./src/js/api/finders');
var findersAPI = finders(connection);

app.use(express.static(__dirname + '/public'));

/* insert any app.get or app.post you need here */

/*
This says: for any path NOT served by the middleware above, send the file called index.html instead.
For example, if the client requests http://server/step-2 the server will send the file index.html, which will start the same React app.
This will enable us to do url-based routing on the front-end.
*/
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.post('/searchAccount', function(req, res){
  //ACCOUNT IS IN DATABASE SEND BACK REROUTE
  //IF  NOT SEND BACK ERROR MESSAGE
  
  
  findersAPI.getAccounts(req.account, function(accounts, err){
    if(err) {
      res.send(err);
    } else {
      res.send({msg: 'ok', accounts: accounts})
    }
    
  })
});

app.post('/searchItem', function(req, res) {
  
  
  
  res.send({msg: "ok", items: [{name: "red hat"}, {name: "the north face jacket"}, {name: "hello kitty keys"}]})
})

app.listen(process.env.PORT || 8080, function() {
  console.log('Server started');
});


