const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    const myURL = new URL('https://lowcodeazure.com/');
    
    response.write(myURL);
    response.end("Hello World From LowCodeAzure!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
