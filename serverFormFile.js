const http = require('http');
const fs = require('fs');
const { parse } = require('path');

const server = http.createServer( (request, response)=>{
    response.setHeader('content-type', 'text/html');
    function showForm(response)
    {
        response.write('<html>');
        response.write('<head> <title>Home Page</title> </head>')
        response.write('<body>');
        response.write(" <form action='/message' method='POST'> ");
        response.write("<input type='text' name='message'>");
        response.write("<button type='submit'>Send</button> ");
        return response.end();
    }

    if(request.url == '/')
    {
        showForm(response);
    }
    if(request.url == '/message')
    {
        const rawBody = [];
        //request.on() helps us to know when any event is happening
        //'data' is used to fetch the data chunks piece by piece
        request.on('data', (chunk)=>{  
            rawBody.push(chunk);    //Pushing each chunk into rawBoody
        });

        //'end' used to know when the inout event ended and buffer is ready
        return request.on('end', ()=>{
            const rawBodyConactenated = Buffer.concat(rawBody); //Creating a buffer from rawchunks
            const parsedBodyString = rawBodyConactenated.toString(); //Converting Buffer to string
            //Generally, above gives "message=ANY_INPUT_ENTERED", here 'message' text will have come from
            //It's name='message' in <input> field in <form>. So, inout field name will be fetched 
            // and it will attached with the value of input when we parse it.
            const message = parsedBodyString.split('=')[1];
            fs.writeFile('message.txt', message, (error)=>{
                if(error)
                    console.log("File write error")
                else
                {  
                    response.statusCode=302; //setting status code of response to redirected
                    response.write(message); // writing the parsed input onto the screen            
                    showForm(response);                
                }
            })
        })
    }
})

server.listen(4000);