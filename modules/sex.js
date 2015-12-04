// See http://chancejs.com/
var chance = require('chance')();

/**
 * Generates a random sex for the user.
 * @returns {String} Returns the user's sex.
 */
module.exports = function(){
  return chance.gender();
};
