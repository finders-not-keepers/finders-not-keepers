var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var axios =require('axios');
var nodemailer = require("nodemailer");



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
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.post('/searchAccount', function(req, res){
  findersAPI.getAccounts(req.body, function(err, accountsArray){
    if(err) {
      console.log(err);
      res.send(err);
    } else {
      res.send({msg: 'ok', account: accountsArray});
    }
  });
});

app.post('/searchItem', function(req, res) {
  findersAPI.getAllItemsForSearch (req.body, function (err, itemArray){
    if(err) {
      console.log(err);
      res.send(err);
    } else {
      res.send({msg: 'ok', item: itemArray});
    }
  });
});

app.post ('/itemDescription', function (req, res){
  var itemId = req.body.ID
  findersAPI.getItemDescription(itemId, function (err, descriptionArray){
    if(err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send({msg: 'ok', description: descriptionArray});
    }
  });
});

app.post ('/claimItem/send', function (req, res){
  console.log("HERE");
  
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'findersnotkeepers1@gmail.com', 
      pass: 'finders123'
    }
  });
    var mailOptions = {
     from: `${req.body.name} <${req.body.email}>`,
     to: ' findersnotkeepers1@gmail.com',
     subject: 'Website submission',
     text: `You have a submission with these details... Name: ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}}`,
     html: `
     <p>
         <ul>
           <li>Name: ${req.body.name}</li>
           <li>Email: ${req.body.email}</li>
           <li>Message: ${req.body.message}</li>
         </ul>
     </p>`
   };
   console.log(mailOptions);
   transporter.sendMail(mailOptions, function(err, info) {
     if(err) {
         console.log(err);
         res.redirect('/');
     } else {
         console.log(`Message Sent: ${info.response}`);
         res.redirect('/');
     }
   });
    
  });
  
  // findersAPI.getItemDescription(PUT ITEM ID, function (err, descriptionArray){
  //   if(err) {
  //     console.log(err);
  //     res.status(500).send(err);
  //   } else {
  //     res.send({msg: 'ok', description: descriptionArray});
  //   }
  // });



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


app.listen(process.env.PORT || 8080, function() {
  console.log('Server started');
});


