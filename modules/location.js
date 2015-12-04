// See http://chancejs.com/
var chance = require('chance')();

/**
 * Generates a random location for the user.
 * @returns {String} Returns the user's address.
 */
module.exports = function(){
  return chance.address();
};

// TODO: create a full postal address, not just street address