# Solution 

## Structure

Project structure follows the typical Express-Generator format with some additions. All random generator modules are in the `/modules` folder. The user class constructor along with all of its database methods are inside of the `/models/user.js` file. Users are sent to the request inside of the `/routes/users/js` file. Finally, all of the jQuery and Ajax occurs in the `/public/javascripts/randomHumanGenerator.js` file.

See Notes below for more information.

``` 
.
├── app.js
├── bin
│   └── www
├── models
│   └── user.js
├── modules
│   ├── age.js
│   ├── generator.js
│   ├── location.js
│   ├── name.js
│   ├── sex.js
│   └── twitterHandle.js
├── package.json
├── public
│   └── javascripts
│       └── randomHumanGenerator.js
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

## Installation instructions

After you have cloned/forked, be sure to run `npm install` to install 3rd party dependencies. 

Inside the file `/models/user.js` be sure to change `const MONGO_DB = 'mongodb://localhost:27017/exampleDb';` to your MongoDB URL.


## Notes

The `/models/user.js` file uses the newer ES6 constructor format. For notes on this, read https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes.

The route `/routes/users.js` uses the method `getAll()` in `/models/user.js` to check if there are any existing users. If so it just sends them back to the response. If not, the route uses the `/modules/generator.js` file and passes in a number of users to create. That file then requires all other needed modules for random generation. Once the users have been generated and returned back to the route, the route then uses the method `batchCreate()` in `/models/user.js` to create them in the database and sends the objects back to the response.

# Node/Express/Mongo Group Challenge

Welcome to this week's group challenge! 

In this challenge, you will be building an application that uses jQuery, Node, Express, and MongoDB. 
Your group will be creating an application that generates users. Each user will have

* name
* age
* sex
* location
* Twitter handle 

The trick, however, is all of this needs to happen server side. The client side will just be requesting the information back from the server. Once it gets the information, it will be displaying it on the DOM.

When the application loads, have a button in the center of the top of the page that reads Get Users. When that button is clicked, it will tell the server that it is requesting information with a GET request. Once the GET request is received by the server, it will generate 20 users. All of those users will be written to the database, then all of that information will be sent back down to the client to be rendered. The information needs to be stored in a MongoDB database as the client UI will allow for deletion of users.

To create a user, you will need separate modules for each user attribute: Name, Age, Sex, Location, and Twitter Handle. It should be all controlled off of one main module that is used to generate one user. The module should be fired off by another module that is used to create 20 users. Then that module will write those users to the database, and then once all of that is complete, all the information is sent back to the client in one JSON response.

The client UI should display all of the information. In addition, the client UI should also have a delete button that deletes the user both from the DOM and from the database.

Remember to talk with your group members throughout to ensure that everyone has a general understanding of what is going on.

Good Luck!
