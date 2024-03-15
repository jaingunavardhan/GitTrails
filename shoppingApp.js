const express = require('express');
const path = require('path')
//Requiring user-defined files which are located in Routes folder followed by name
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const contactusRouter = require('./routes/contactus.js')

//Like creating an express server
const app = express();

//express.static is used to send static files which can be accessible without any encryption like css files
//path.join() is like append function used to define path to a file, __direname gives current location of file
app.use( express.static( path.join(__dirname, 'public')) );
//using '/admin' as filter to make sure only routes with url /admin/ANY will get routed here
app.use('/admin', adminRouter);
app.use(contactusRouter)
app.use(shopRouter);
//For any other random route entered which is not in our list, we show 404 Not found
app.use( (request, response, next)=>{
    //Sending an HTML file with it's path described by path.join
    //Eg: __direname gives C:\Users\jaing\Sharpener\GitTrails, then it joins views and 404.html
    //FInal: C:\Users\jaing\Sharpener\GitTrails\views\404.html
    response.sendFile( path.join(__dirname, 'views', '404.html'));
})

//Listens for any requests at port 4000
app.listen(4000);