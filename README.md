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
