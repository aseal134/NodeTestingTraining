  var express = require('express');
  var host = '127.0.0.1';
  var port = 8001;
  var bodyParser = require('body-parser');

  var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  var router = express.Router();
  router.get('/hello', function (req, res) {
    res.end('hello world');
  }


  // app.post('/api/users', function(req, res) {
  //   var user_id = req.body.id;
  //   var token = req.body.token;
  //   var geo = req.body.geo;

  //   res.send(user_id + ' ' + token + ' ' + geo);
  
  // });

  );
	
	app.use(router);

  app.listen(host, port, function () {
    console.log(
      'Express is up and running on %s:%s',
      host,
      port);
  });