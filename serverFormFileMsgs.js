const http = require('http');
const handler = require('./serverFormFileModule.js');
// "./FILE" indicates relative path to the current file and also
// informs that this is not a JS core module but is user-defined

const server = http.createServer(handler);
//We are calling back handler when any request is made by client
// NOTE: just pass the function reference here as this is callback
// You can also pass entire function definition but not function call with ().

server.listen(4000);