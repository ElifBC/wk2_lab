// import http web-server nodejs core package
const http = require ('http')
const { type } = require('os')

// create web server event handler

const server = http.createServer((req, res) => {
    res.Writehead(200, {'Content-type' : 'text/plain'});
    res.end ('Hello world');
});

//Start server
server.listen(3000);

console.log ('Server running at http://localhost:3000');