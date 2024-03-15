const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (request, response, next)=>{
    console.log("In the Home Shopping Site page")
    response.sendFile( path.join(__dirname, '..', 'views', 'shop.html') );
})

module.exports = router;