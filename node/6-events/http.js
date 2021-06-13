const http = require("http");

// create a server
const server = http.createServer();

// set the emitter for the request event
// request event is defined internally for server object
server.on("request", (req, res) => {
    res.end("Welcome back!");
});

server.listen(5000);
