const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser')

router.use( bodyParser.urlencoded({extended:false}))

router.get('/contactus', (request, response, next)=>{
    console.log("In Contactus Page...")

    response.sendFile( path.join(__dirname, '..', 'views', 'contactus.html'));
})

router.get('/success', (request, response, next)=>{
    //console.log("Success page...", request.body);
    
    response.sendFile( path.join(__dirname, '..', 'views', 'success.html'));
})

router.post('/success', (request, response, next)=>{
    console.log("Success page...", request.body);
    
    response.redirect('/success');
});


module.exports = router;