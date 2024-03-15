const express = require('express');
//Importing user-defined routing files. This way is just for encapsulating the working of our code
const routes = require('./routes/chatAppRoutes_2.js')

//creating an app to create a server
const app = express();

//Calling back 'routes' from user-defined file to handle requests & responses
app.use(routes);

//When any route doesn't exist in routes for a provided url eg. url=/gsjdhk, we provide with 404 error
app.use('/', (request, response, next)=>{
    console.log("Invalid Page");
    //Setting statuscode to 404 and displaying Page not found
    response.status(404).send("<h1>Page Not Found</h1>");
})

//Listening on port 4000 for any incoming server/website access requests
app.listen(4000);