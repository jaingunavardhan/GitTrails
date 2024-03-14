const express = require('express');
const bodyParser = require('body-parser')

//Like creating an express server
const app = express();

//parses the entered body like HTML body content
app.use( bodyParser.urlencoded( {extended:false} ) );

//executed only when the request.url is '/add-product'
app.use( '/add-product', (request, response, next)=>{
    console.log("Int the Add Product Page");
    //Taking a form inout and on submit page with url '/product' will be opened
    response.send("<form action='/product' method='POST'><input type='text' name='title'><input type='text' name='size'><button type=submit>Add Product</button></form>");
})

app.post( '/product', (request, response, next)=>{
    console.log("In the Products Page");
    //Showing the body contained in form after submit
    console.log(request.body);
    //Like setting statusCode to 302 and redirecting with header all taken care by express
    response.redirect('/');
})

app.use('/', (request, response, next)=>{
    response.send("<h1>Welcome to Gunavardhan's Site</h1>");
})

//Listens for any requests at port 4000
app.listen(4000);