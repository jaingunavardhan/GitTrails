//Here, we are importing the "http" module using "require(MODULE_NAME)"
//require() is used to import any module into the code
const http = require('http')

//using the imported http module we are creating a server
//http.createServer( (request, response)=>{} ) is used to create a server
//request and response are the callback function parameters
const server = http.createServer( (request, response) => {
    console.log("Hai Gunavardhan Jain, localhost:4000 has been called")
});

//Once we have created a server, we need to know when it has been called
//So, we listen at any specified path or port if it has been called by client
server.listen(4000);