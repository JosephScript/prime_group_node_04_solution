var express = require('express');
var router = express.Router();
var User = require('../models/user');
var generator = require('../modules/generator');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // check if there are already users in the database
  User.getAll(function (err, results) {
    if (err) {
      return next(results);
    } else {

      // if so, return them
      if (results.length > 0) {
        return res.json(results);
      } else {
        // if not, generate 20 users
        var users = generator(20);

        // insert them to the database
        User.batchCreate(users, function (err, results) {
          if (err) {
            return next(results);
          } else {
            // return the users
            return res.json(results);
          }

        })

      }
    }
  });

});

module.exports = router;
