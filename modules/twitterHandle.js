// See http://chancejs.com/
var chance = require('chance')();

/**
 * Generates a random Twitter handle for the user.
 * @returns {String} Returns the user's Twitter handle.
 */
module.exports = function(){
  return chance.twitter();
};