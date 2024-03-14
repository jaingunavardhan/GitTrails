const express = require('express');

const router = express.Router();

router.get('/', (request, response, next)=>{
    console.log("In the Home Shopping Site page")
    response.send("<h1>Welcome to Shopping Site</h1>");
})

module.exports = router;