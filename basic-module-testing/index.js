'use strict';

var users = [{
    name: 'Node'
  }, {
    name: 'JavaScript'
  }];


exports.getUsers = function () {
  return users;
};

exports.joinStrings = function (strs) {
  return strs.join(' ');
};

exports.addUser = function(data){
	users.push( {'name': data});
};