var app = require('express')();
var fs = require('fs');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

app.get('/:filename', function (req, res, next) {


	new Promise(function(resolve, reject){
		fs.readFile(req.params.filename, function(err,data){
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		});
	})
	.then(function(data){
		res.end(data);
	})
	.catch(next);

	// fs.readFileAsync(req.params.filename)
	// 	.then(function (data) {
	// 		console.log('file contained: ' + data.toString());
	// 		res.end(data)
	// 	})
	// 	.catch(function (err) {
	// 		console.error('failed to read file', err);
	// });
});

app.use(function (err, req, res, next) {

	res.status(500).end('error occurred: ' + err.toString());
	})

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});