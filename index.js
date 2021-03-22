const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url == "/warmup") {
        console.log("*** Hello from /warmup path ***");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello from /warmup path");
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello World!");
        
        var datetime = new Date().toString();
        console.log("Hello from the server response method. .... "+datetime)
    }

    console.log(request.headers)

});



const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
