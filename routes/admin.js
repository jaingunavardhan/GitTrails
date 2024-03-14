const express = require('express');
const bodyParser = require('body-parser')

//Creating a router using express.Router and use this router same as you use app.use
const router = express.Router();

//parses the entered body like HTML body content
router.use( bodyParser.urlencoded( {extended:false} ) );

//executed only when the url is '/add-product' and also only when CRUD methos is GET.
router.get( '/add-product', (request, response, next)=>{
    console.log("In the Add Product Page");
    //Taking a form inout and on submit page with url '/product' will be opened
    response.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><input type='text' name='size'><button type=submit>Add Product</button></form>");
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