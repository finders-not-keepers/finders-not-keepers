{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":40},"action":"insert","lines":["const express = require('express');","const aws = require('aws-sdk');","","const app = express();","app.set('views', './views');","app.use(express.static('./public'));","app.engine('html', require('ejs').renderFile);","app.listen(process.env.PORT || 3000);","","const S3_BUCKET = process.env.S3_BUCKET;"],"id":1}],[{"start":{"row":9,"column":40},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":62},"action":"insert","lines":["app.get('/account', (req, res) => res.render('account.html'));"],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":62},"end":{"row":11,"column":62},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1471750323149,"hash":"457798117fbd141bb6243cf4c46c020fd2434cbc"}