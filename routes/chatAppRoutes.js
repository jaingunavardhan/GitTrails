const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();

let username;
const file = "chatAppMessages.txt";
const formData = `<form action='/' method='POST'><input id='username' type='text' name='message'><br><button type=submit>Send</button></form>`;

function write(data)
{
    fs.appendFileSync(file, data)
}

function read()
{
    if( fs.existsSync(file) )
    {
        return fs.readFileSync(file)
    }
    else
    {
        return "No Messages yet \n";
    }
}


router.use( bodyParser.urlencoded({extended:false}) );

router.get('/login', (request, response, next)=>{
    console.log("In Login Page", request.body);

    response.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action='/' method='POST'><input id='username' type='text' name='username'><br><button type=submit>Login</button></form>`);
})

router.get('/', (request, response, next)=>{
    const readData = read();
    response.send( `${readData}\n${formData}`);
})

router.post('/', (request, response, next)=>{
    console.log("Messages Page", request.body);

    if(request.body.username != undefined)
    {
        username = request.body.username;

        const readData = read();
        response.send( `${readData}${formData}`);
        return;
    }
    else
    {
        const writeData = `${username} : ${request.body.message}\n`;
        write( writeData );
    
        const readData = read();
        response.send( `${readData}\n${formData}`); 
    }   
})

module.exports = router;