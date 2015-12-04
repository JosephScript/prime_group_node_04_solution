var User = require('../models/user');
var age = require('./age');
var location = require('./location');
var name = require('./name');
var sex = require('./sex');
var twitterHandle = require('./twitterHandle');

/**
 *
 * @param num Number of users to generate
 * @returns {Array} Returns an array of users, randomly generated.
 */
module.exports = function(num){
  var users = [];

  for (var i = 0; i < num; i ++){
    users.push(new User(name(), age(), sex(), location(), twitterHandle()));
  }

  return users;
};