'use strict';

var request = require('request');

exports.doLogin() = function(username, password, callback){
  request({
    form: {
      username: username,
      password: password
    },
    url: 'http://my-fake-api.me.com/login'
  }, function(err, res){
    if (err) {
      callback(err);
    }else if (res.statusCode === 200){
      callback(null, true);
    }else{
      callback(null,false);
    }
  });
};

exports.getUrl = function (url, callback) {
  request({
    method: 'GET',
    url: url
  }, function (err, res, body) {
    if (err) {
      callback(err, null);
    } else if (res.statusCode !== 200) {
      callback(
        new Error('status code ' + res.statusCode + ' was received'),
        body
      );
    } else {
      callback(null, body);
    }
  })
};
