/*********EXPRESS SERVER*********/

//REQUIRES
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var axios = require('axios');
var nodemailer = require("nodemailer");
var jwt = require('express-jwt');
var aws = require('aws-sdk');
var finders = require('./src/js/api/finders');
require('dotenv').config();



//AWS ACCESS 
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

var S3_BUCKET = process.env.S3_BUCKET;

//AUTH0 AUTHETIFICATION & DATABSE CONNECTIONS
var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID
});


var AuthenticationClient = require('auth0').AuthenticationClient;
var auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID
});

var ManagementClient = require('auth0').ManagementClient;
var management = new ManagementClient({
  token: process.env.AUTH0_MANAGEMENT_TOKEN,
  domain: process.env.AUTH0_DOMAIN
});


//LOCAL MYSQL CONNECTION
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cbroomhead',
  password: '',
  database: 'finders'
});

var findersAPI = finders(connection);

//MIDDLEWARE
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());


//ROUTES FROM FRONTEND
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
        console.log(itemArray);
      res.send({
        msg: 'ok',
        item: itemArray
      });
    }
  });
});

app.post('/claimItem/:id', function(req, res) {
  findersAPI.getAccountEmail(req.body.itemId, function(err, resEmail) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      res.send({
        msg: 'ok',
        resEmail
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
        to: resEmail[0].email,
        subject: 'Someone has claimed an item!',
        text: `You have a submission with these details... Name: ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}`,
        html: `
              <head>
                <link href="https://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Yellowtail" rel="stylesheet">
              </head>
              <style>
                img {
                  width: 200px;
                  border-radius: 4px;
                }
                body {
                  background: url("http://i.imgur.com/q3baXLz.jpg") fixed no-repeat;
                  background-size: cover;
                  background-color: #f95759;
                  color: white;
                  font-family: "Helvetica Neue", Helvetica;
                }
                .container {
                  margin: 2% 10% 2% 10%;
                  height: 100vh;
                }
                .header {
                  height: 10%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                span {
                  color: #f95759;
                  font-family: "Yellowtail", cursive;
                }
                h1 {
                  font-size: 4.5em;
                  text-shadow: 0 0 10px #000;
                }
                .claimBox {
                  background-color: rgba(255, 255, 255, 0.3);
                  width: 100%;
                  padding: 10px;
                  margin: 10px 10px 50px 5px;
                  border: 1px solid #FFF;
                  
                }
                .claimImg {
                  margin: 5px;
                  border-radius: 5px;
                  width: 200px;
                }
                a {
                  color: #f95759;
                  text-shadow: 0 0 1px #000;
                }
                p {
                  font-size: 1.5em;
                }
                
                h2 {
                  font-size: 3em;
                  margin: 5px 5px 0 5px;
                  text-shadow: 0 0 5px #000;
                  font-family: "Raleway";
                }
                
                h3 {
                  font-size: 2em;
                  margin: 5px;
                  text-shadow: 0 0 5px #000;
                }
                .signoff {
                  text-align: right;
                  margin-right: 10px;
                }
                .footer {
                  margin: 5px;
                }
                
              </style>
              <body>
              <div class="header">
                  <div class="headercontent">
                    <h1>Finders<span>Not</span> Keepers</h1>
                  </div>
              </div>
              <hr/>
              <div class="container">
                
                  <h2>Hi, ${resEmail[0].name}!</h2>
                  <h3>Someone would like to claim "${resEmail[0].title}"...</h3>
                  <div class="claimImg">
                      <img src="${resEmail[0].media}">
                    </div>
                  <div class="claimBox">
                    <div class="claimDesc">
                      <p><strong>Description: </strong>${resEmail[0].description}</p>
                      <p><strong>Requester Email: </strong> ${req.body.email}</p>
                      <hr/>
                      <p><strong>Request Message: </strong> ${req.body.message}</p>
                    </div>
                  </div>
                  <div class="footer">
                    <p>Please make sure to delete this post once it has been successfully claimed!</p>
                    <p>Thanks!</p>
                    <p class="signoff">- The FindersNotKeepers Team</p>
                  <div/>
              </div>
              </body>
              `
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

app.post('/claim', function(req, res) {
  findersAPI.getItem(req.body.itemId, function(err, itemArray) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      res.send({
        msg: 'ok',
        item: itemArray
      });
    }
  });
});

app.post('/login', jwtCheck, function(req, res) {
  if (req.user) {
    findersAPI.getAccountById(req.user.sub, function(err, user) {
      if (err) {
        res.send(err);
      }
      else {

        if (user.length === 0) {
          management.getUser({
            id: req.user.sub
          }, function(err, profile) {
            findersAPI.createProfile(profile, function(req, profileArray) {
              if (err) {
                res.send({
                  msg: 'taken'
                });
              }
              else {
                res.send({
                  msg: 'ok',
                  item: profileArray
                })
              }
            })
          })
        } else {
          management.getUser({
          id: req.user.sub
        }, function(err, profile) {
          if (err) {
            res.send(err);
          }
          else {
            res.send({
              msg: 'ok',
              user: profile
            })
          }
        })
        }
      }

    })
  }
});

app.post('/save-details', function(req, res) {
  var s3 = new aws.S3();
  var fileName = req.query['file-name'];
  var fileType = req.query['file-type'];
  var s3Params = {
    Bucket: 'findersnotkeepers',
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, function(err, data) {
    if (err) {
      console.log(err);
      return res.end();
    }
    var returnData = {
      signedRequest: data,
      url: `https://${encodeURIComponent(S3_BUCKET)}.s3.amazonaws.com/${encodeURIComponent(fileName)}`
    };
    res.send(JSON.stringify(returnData));
  });
});

app.post('/createPost', function(req, res) {
  findersAPI.getAccountById(req.body.subid, function(err, accId) {
    if (err) {
      res.send(err);
    }
    else {
      var account_id = accId[0].id;
      findersAPI.createItem(req.body, account_id, function(err, itemPost) {
        if (err) {
          res.send(err);
        }
        else {
          res.send({ msg: 'ok', account: itemPost });
        }
      });
    }
  });
});

app.post('/postsforaccounts', function(req, res) {
  findersAPI.getAccountById(req.body.subid, function(err, accId) {
    if (err) {
      res.send(err);
    }
    else {
      findersAPI.getAllItemsForAccountSubid(req.body.subid, function(err, itemPosts) {
        if (err) {
          console.log(err)
          res.send(err);
        }
        else {
          res.send({
            msg: 'ok',
            allitems: itemPosts
          });
        }
      });
    }
  });
});

app.post('/delete', function(req, res) {
  findersAPI.deleteItem(req.body.itemId, function(err, removeItem) {
    if (err) {
      res.send(err);
    }
    else {
      res.send({
        msg: 'ok',
        allitems: removeItem
      });
    }
  })
});

app.post("/allItems", function(req, res) {
  findersAPI.getAllItemsForAccount(req.body.accountid, function(err, items) {
    if (err) {
      res.send(err);
    }
    else {

      res.send({
        msg: "ok",
        items: items
      })
    }
  })
});

app.get('/getpost/:id', function (req, res){
  findersAPI.getItem(req.params.id, function(err, allItem) {
    if (err) {
      res.send(err);
    }
    else {
      res.send({
        msg: 'ok',
        allitem: allItem
      });
    }
  })
})

app.post('/editpost/:id', function (req, res){
  console.log("ON THE EDIT POST SERVER ROUTE", req.body)
  findersAPI.editItem(req.body, function(err, allItem) {
    if (err) {
      res.send(err);
    }
    else {
      res.send({
        msg: 'ok',
        allitem: allItem
      });
    }
  })
})

// BOILERPLATE 
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, function() {
  console.log('Server started');
});
