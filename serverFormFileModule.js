const fs = require('fs');

function requestHandler(request, response)
{
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
        if( fs.existsSync('message.txt') )
        {
            const file = fs.readFileSync('message.txt')
            response.write(file.toString());  
            showForm(response);                    
        }
        
    }
    if(request.url == '/message')
    {
        const rawBody = [];                
        
        request.on('data', (chunk)=>{
            rawBody.push(chunk);
        });

        return request.on('end', ()=>{
            const rawBodyConactenated = Buffer.concat(rawBody);
            const parsedBodyString = rawBodyConactenated.toString();
            const message = parsedBodyString.split('=')[1];
            fs.appendFile('message.txt', message, (error)=>{
                if(error)
                    console.log("File append error")
                else
                {                                                   
                    response.statusCode=302;

                    const file = fs.readFileSync('message.txt')
                    response.write(file.toString());  

                    showForm(response);                                                                            
                }
            })
        })
    }
}

module.exports = requestHandler;
//Informing that this file can give access to requestHandler, if any other file needs it.