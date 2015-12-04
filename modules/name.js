// See http://chancejs.com/
var chance = require('chance')();

/**
 * Generates a random name for the user.
 * @param gender {String} 'Male' or 'Female', will assist in generating the name.
 * @returns {String} Returns the user's name. Also may randomly add a middle name, prefix and suffix.
 */
module.exports = function(gender){
  var middle = chance.bool();
  var prefix = chance.bool();
  var suffix = chance.bool();
  return chance.name({
    gender: gender,
    middle: middle,
    prefix: prefix,
    suffix: suffix});
};
