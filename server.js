var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var axios = require('axios');
var nodemailer = require("nodemailer");
var jwt = require('express-jwt');


var jwtCheck = jwt({
  secret: new Buffer('iKtmQ6lhYlaKbX1QlixUiHl3eqmzhsCJMF5gXi8_rxzDLTgBNlHVF5BaJ3eS_gaW', 'base64'),
  audience: 'PmdbxTpKHsOulN583eoykb8Z8lizNulQ'
});


var AuthenticationClient = require('auth0').AuthenticationClient;
var auth0 = new AuthenticationClient({
  domain: 'findersnotkeepers.auth0.com',
  clientId: 'PmdbxTpKHsOulN583eoykb8Z8lizNulQ'
});

var ManagementClient = require('auth0').ManagementClient;
var management = new ManagementClient({
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJQQ09od3psU29GZEJraWdlVkF0MXJXNGhMUnZZU2ZVRCIsInNjb3BlcyI6eyJ1c2VycyI6eyJhY3Rpb25zIjpbInJlYWQiXX19LCJpYXQiOjE0NzE2Mjg2MDQsImp0aSI6ImFiN2Y0MzI3NTdhMGY0ZDY4NGM5ZTk5MmZmZjI5MWIyIn0.GIZ8V4fSWBoR7G1waPpkh3A8metchHGoOr59Y38vXts',
  domain: 'findersnotkeepers.auth0.com'
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
      console.log("TIHS IS THE MEAIL: ", email.EMAIL)
      console.log("THIS IS THE RE BODY FOR THE CLAIM ITEM FORM", req.body);
      var mailOptions = {
        from: `${req.body.name} <${req.body.email}>`,
        to: email.email,
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
      res.send({msg: 'ok', item: itemArray});
    }
  });
})

app.post ('/login', jwtCheck , function(req, res){
  management.getUser({id: req.user.sub}, function(err, profile) {
    // if (req.user.sub === profile.user_id) {
    //   res.send(req.user);
    // }
    // else {
    findersAPI.createProfile(profile, function (req, profileArray){
      if(err){
        console.log(err); 
      }
      else {
        res.send({msg: 'ok', item: profileArray})
      }
    })
    // }
  })
})


app.post ('/createPost', function (req, res){
  findersAPI.getAccountById(req.body.subid, function (err, accId){
    if(err){
      res.send(err);
    }
    else {
      var account_id = accId[0].id;
      console.log("THIS IS THE ID:" , accId[0].id);
        findersAPI.createItem(req.body, account_id , function (err, itemPost){
            if (err){
              console.log("we are getting here for some reason")
              res.send(err);  
            }
            else {
              console.log(itemPost);
              res.send({msg: 'ok', account: itemPost});
            }
      });
    }
  });
});


app.post ('/postsforaccounts' , function (req, res){
   findersAPI.getAccountById( req.body.subid, function (err, accId){
    if(err){
      res.send(err);
    }
    else {
        findersAPI.getAllItemsForAccount(req.body.subid, function (err, itemPosts){
            if (err){
              res.send(err);  
            }
            else {
              console.log(itemPosts);
              res.send({msg: 'ok', allitems: itemPosts});
            }
      });
    }
  });
})

app.post('/delete', function (req, res){
  findersAPI.deleteItem(req.body.itemId, function (err, removeItem){
    if(err){
      res.send(err);
    }
    else {
       res.send({msg: 'ok', allitems: removeItem});
    }
  })
})


app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, function() {
  console.log('Server started');
});


