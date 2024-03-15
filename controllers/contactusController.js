const path = require('path');

exports.getContactus = (request, response, next)=>{
    console.log("In Contactus Page...")

    response.sendFile( path.join(__dirname, '..', 'views', 'contactus.html'));
}

exports.getSuccess = (request, response, next)=>{
    //console.log("Success page...", request.body);
    
    response.sendFile( path.join(__dirname, '..', 'views', 'success.html'));
}

exports.postSuccess = (request, response, next)=>{
    console.log("Success page...", request.body);
    
    response.redirect('/success');
}