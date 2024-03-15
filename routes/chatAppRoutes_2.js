//Importing 'express', 'body-parser', 'fs'
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

//Creating a Router instance for using further (you can use same as app.use/get/post...)
const router = express.Router();

//keeping the form which is to be shown at the Message Chat page contant & fixed
//Here we use type="hidden" so that it won't be visible for display
//but used it to fetch the username from localStorage when a msg is sent
//localStorage can't be accessible from server (i.e. node js)
//So, we implement it at the client side when client clicks submit/send
const formData = `<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action='/' method='POST'>
                    <input type="text" name="message" placeholder="Enter Message"></input>
                    <input type="hidden" name="username" id="username"></input>
                    <button type="submit">Send</button> </form> `;

//Filename to store & retrieve msgs
const filename = "chatAppMessages.txt";
//unction to read file content
function read()
{
    //existsSync() is used to synchronously know if file exists
    if(fs.existsSync(filename))
    {
        //Synchronously reading file bcoz we want to supply users with real-time data
        return fs.readFileSync(filename);
    }
    else
    {
        //If no file is present for msgs, we say no messages
        return "No Messages yet !";
    }
}

//Function to write data Synchronously, so that when reading we get real-time data
function write(data)
{
    fs.appendFileSync(filename, data);
}

//Used to have body-parser working in the code to fetch body content of html page
router.use( bodyParser.urlencoded({extended:false}) )

//Used when url=/login and method=GET ,  If we use POST, this won't get executed
router.get('/login', (request, response, next)=>{
    console.log("In Login Page...")
    //Login page form with username field & login button
    response.send( `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action='/' method='GET'>
                <input type="text" id="username" name="username" placeholder="Enter Username"></input><br>
                <button type="submit">Login</button> </form> `);
})

//gets executed only when url=/ and method=GET
router.get('/', (request, response, next)=>{
    console.log("Redirected from Login Page...")
    const readData = read();    //Storing data read & returned from read() funtion
    response.send(`${readData}\n${formData}`); //Sending this data along with form to send any other msg
})

//gets executed only when url=/ and method=POST
router.post('/', (request, response, next)=>{
    //Writing data in format username:message to let users know who is messaging
    const writeData = `${request.body.username} : ${request.body.message}\n`;
    write(writeData);

    //After writing, we just redirect to '/' page with GET request to show msgs present
    //This redirecting avoids errors we get when we reload the page from POST method at '/'
    response.redirect('/');
})

//Exporting 'router' to be able to call from main code file
module.exports = router;