const express = require('express');
const routes = require('./routes/chatAppRoutes.js')

const app = express();

app.use(routes);

app.use('/', (request, response, next)=>{
    console.log("Invalid Page");
    response.status(404).send("<h1>Page Not Found</h1>");
})

app.listen(4000);