//Here, we are importing the "http" module using "require(MODULE_NAME)"
const http = require('http')

//http.createServer( (request, response)=>{} ) is used to create a server
const server = http.createServer( (request, response)=>{
    console.log("req.url = ", request.url) //gives the path specified in link
    console.log("req.method = ", request.method) //gives the type of CRUD operation

    response.setHeader('content-type', 'text/html') //set header as content-type:text/html
    //response.write() can be used to write chunks of data in multiple lines
    //All lines will be handled together by the node (In this, we are writing HTML content)
    response.write( '<html>' );
    response.write( "<head> <title> My First Server </title> </head>");
    response.write(" <body> <h1>Welcome to ");
    if(request.url == "/home")
        response.write("my Home Page")
    else if(request.url == '/about')
        response.write("About us page")
    else if(request.url == '/node')
        response.write("Node JS Project")
    else   
        response.write("Nowhere")
    response.write("</h1> </body>");
    response.write("</html>");
    response.end(); //ends the response here (You can see Page Loading Rotation stops)
    //After completion of all response content, we need to inform the end of response
})

//Once we have created a server, we need to know when it has been called
//So, we listen at any specified path or port if it has been called by client
server.listen(4000);
