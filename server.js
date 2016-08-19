var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var axios = require('axios');
var nodemailer = require("nodemailer");
var jwt = require('express-jwt');
var Auth0 = require('auth0-js');


var jwtCheck = jwt({
  secret: new Buffer('iKtmQ6lhYlaKbX1QlixUiHl3eqmzhsCJMF5gXi8_rxzDLTgBNlHVF5BaJ3eS_gaW', 'base64'),
  audience: 'PmdbxTpKHsOulN583eoykb8Z8lizNulQ'
});

var auth0 = new Auth0({
    domain:       'findersnotkeepers.auth0.com',
    clientID:     'PmdbxTpKHsOulN583eoykb8Z8lizNulQ',
    callbackURL:  'https://finders-not-keepers-final-cbroomhead.c9users.io/accountPage',
    responseType: 'token'
  });


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cbroomhead',
  password: '',
  database: 'finders'
});

var finders = require('./src/js/api/finders');
var findersAPI = finders(connection);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

/* insert any app.get or app.post you need here */

/*
This says: for any path NOT served by the middleware above, send the file called index.html instead.
For example, if the client requests http://server/step-2 the server will send the file index.html, which will start the same React app.
This will enable us to do url-based routing on the front-end.
*/


app.post('/searchAccount', function(req, res) {
  findersAPI.getAccounts(req.body, function(err, accountsArray) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send({
        msg: 'ok',
        account: accountsArray
      });
    }
  });
});

app.post('/searchItem', function(req, res) {
  findersAPI.getAllItemsForSearch(req.body, function(err, itemArray) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send({
        msg: 'ok',
        item: itemArray
      });
    }
  });
});

app.post('/claimItem/:id', function(req, res) {
  findersAPI.getAccountEmail(req.body.itemId, function(err, email) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      res.send({
        msg: 'ok',
        title: email[0].title,
        media: email[0].media
      });
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'findersnotkeepers1@gmail.com',
          pass: 'finders123'
        }
      });
      var mailOptions = {
        from: `${req.body.name} <${req.body.email}>`,
        to: 'findersnotkeepers1@gmail.com',
        subject: 'Someone has claimed an item!',
        text: `You have a submission with these details... Name: ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}`,
        html: `
              <p>
              <ul>
              <li>Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
              <li>Message: ${req.body.message}</li>
              </ul>
              </p>`
      };
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(`Message Sent: ${info.response}`);
        }
      });
    }
  });
});
  
app.post('/crap', function (req, res){
  findersAPI.getItem(req.body.itemId, function (err, itemArray){
    if(err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(itemArray);
      res.send({msg: 'ok', item: itemArray});
    }
  });
})

app.post ('/login', jwtCheck , function(req, res){
  findersAPI.findProfile (req.user.sub, function(err, profile) {
    if(err){
      console.log(err);
    }
    else {
    if (!profile) {
          auth0.getProfile(req.body.id_token, function(err, auth0Profile) {
            if (err){
              console.log(err);
            }
            else {
              findersAPI.createProfile({name: auth0Profile.full_name})
            }
        })
      }
    }
  })
})



// app.post ('/createPost', function (req, res){
//   findersAPI.createItem(req.body, function (err, itemArray){
//     if (err){
//       res.send(err);  
//     }
//     else {
//       res.send({msg: 'ok', account: itemArray});
//     }
//   })
// });


app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, function() {
  console.log('Server started');
});


