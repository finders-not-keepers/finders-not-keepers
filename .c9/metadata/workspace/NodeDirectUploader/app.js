{"filter":false,"title":"app.js","tooltip":"/NodeDirectUploader/app.js","ace":{"folds":[],"scrolltop":665.5,"scrollleft":0,"selection":{"start":{"row":4,"column":28},"end":{"row":4,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":34,"state":"start","mode":"ace/mode/javascript"}},"hash":"e5bc5f518eb1155c87dd0b7bd571706708b71c25","undoManager":{"mark":60,"position":60,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":40},"action":"insert","lines":["const express = require('express');","const aws = require('aws-sdk');","","const app = express();","app.set('views', './views');","app.use(express.static('./public'));","app.engine('html', require('ejs').renderFile);","app.listen(process.env.PORT || 3000);","","const S3_BUCKET = process.env.S3_BUCKET;"],"id":1}],[{"start":{"row":9,"column":40},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":62},"action":"insert","lines":["app.get('/account', (req, res) => res.render('account.html'));"],"id":4}],[{"start":{"row":11,"column":62},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":13,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["app.get('/sign-s3', (req, res) => {","  const s3 = new aws.S3();","  const fileName = req.query['file-name'];","  const fileType = req.query['file-type'];","  const s3Params = {","    Bucket: S3_BUCKET,","    Key: fileName,","    Expires: 60,","    ContentType: fileType,","    ACL: 'public-read'","  };","","  s3.getSignedUrl('putObject', s3Params, (err, data) => {","    if(err){","      console.log(err);","      return res.end();","    }","    const returnData = {","      signedRequest: data,","      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`","    };","    res.write(JSON.stringify(returnData));","    res.end();","  });","});"],"id":7}],[{"start":{"row":37,"column":3},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":8}],[{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":10}],[{"start":{"row":40,"column":0},"end":{"row":42,"column":3},"action":"insert","lines":["app.post('/save-details', (req, res) => {","  // TODO: Read POSTed form data and do something useful","});"],"id":11}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":5},"action":"remove","lines":["const"],"id":12},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["v"]}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["a"],"id":13}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["r"],"id":14}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":5},"action":"remove","lines":["const"],"id":15},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"]}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["a"],"id":16}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["r"],"id":17}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":5},"action":"remove","lines":["const"],"id":18},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]}],[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"],"id":19}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"],"id":20}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":5},"action":"remove","lines":["const"],"id":21},{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["v"]}],[{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["a"],"id":22}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["r"],"id":23}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":7},"action":"remove","lines":["const"],"id":24},{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["c"]}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"remove","lines":["c"],"id":25}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["v"],"id":26}],[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["a"],"id":27}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["r"],"id":28}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":7},"action":"remove","lines":["const"],"id":29},{"start":{"row":15,"column":2},"end":{"row":15,"column":5},"action":"insert","lines":["var"]}],[{"start":{"row":16,"column":2},"end":{"row":16,"column":7},"action":"remove","lines":["const"],"id":30},{"start":{"row":16,"column":2},"end":{"row":16,"column":5},"action":"insert","lines":["var"]}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":7},"action":"remove","lines":["const"],"id":31},{"start":{"row":17,"column":2},"end":{"row":17,"column":5},"action":"insert","lines":["var"]}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":9},"action":"remove","lines":["const"],"id":32},{"start":{"row":30,"column":4},"end":{"row":30,"column":7},"action":"insert","lines":["var"]}],[{"start":{"row":41,"column":56},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"insert","lines":["c"],"id":34}],[{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["n"],"id":35}],[{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"remove","lines":["n"],"id":36}],[{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["o"],"id":37}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["n"],"id":38}],[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["s"],"id":39}],[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["o"],"id":40}],[{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["l"],"id":41}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["."],"id":42}],[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["e"],"id":43}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["l"],"id":44}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["o"],"id":45}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"remove","lines":["o"],"id":46}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":["l"],"id":47}],[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"remove","lines":["e"],"id":48}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"remove","lines":["."],"id":49}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["e"],"id":50}],[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["."],"id":51}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["l"],"id":52}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["o"],"id":53}],[{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["g"],"id":54}],[{"start":{"row":42,"column":13},"end":{"row":42,"column":15},"action":"insert","lines":["()"],"id":55}],[{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":["r"],"id":56}],[{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["e"],"id":57}],[{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":["s"],"id":58}],[{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"insert","lines":[";"],"id":59}],[{"start":{"row":41,"column":5},"end":{"row":41,"column":10},"action":"remove","lines":["TODO:"],"id":60}],[{"start":{"row":41,"column":4},"end":{"row":41,"column":5},"action":"remove","lines":[" "],"id":61}]]},"timestamp":1471750627798}