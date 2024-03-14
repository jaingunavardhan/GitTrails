const express = require('express');
//Requiring user-defined files which are located in Routes folder followed by name
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

//Like creating an express server
const app = express();

//using '/admin' as filter to make sure only routes with url /admin/ANY will get routed here
app.use('/admin', adminRouter);
app.use(shopRouter);

//For any other random route entered which is not in our list, we show 404 Not found
app.use( (request, response, next)=>{
    response.status(404).send('<h1>Page Not Found</h1>');
})

//Listens for any requests at port 4000
app.listen(4000);