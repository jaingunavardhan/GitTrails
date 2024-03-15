const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Creating a router using express.Router and use this router same as you use app.use
const router = express.Router();

//parses the entered body like HTML body content
router.use( bodyParser.urlencoded( {extended:false} ) );

//executed only when the url is '/add-product' and also only when CRUD methos is GET.
router.get( '/add-product', (request, response, next)=>{
    console.log("In the Add Product Page");
    //Taking a form inout and on submit page with url '/product' will be opened
    response.sendFile( path.join(__dirname, '..', 'views', 'admin.html'))    
})

//executed only when the url is '/add-product' and also only when CRUD methos is POST.
router.post( '/add-product', (request, response, next)=>{
    console.log("In the Products Page");
    //Showing the body contained in form after submit
    console.log(request.body);
    //Like setting statusCode to 302 and redirecting with header all taken care by express
    response.redirect('/');
})

//In above both routes, the route names are same, but they don't create a conflict
//because the CRUD method is different and it will play a major role when both have same route names.

module.exports = router;