// See http://chancejs.com/
var chance = require('chance')();

/**
 * Generates a random age for the user.
 * @returns String Returns the user's age.
 */
module.exports = function(){
  return chance.age();
};
