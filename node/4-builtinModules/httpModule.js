// http module
const http = require("http");

// create a server
const server = http.createServer((req, res) => {
    // home page
    if (req.url === "/") {
        res.end("Welcome to the Home Page");
    } else if (req.url === "/about") {
        res.end("Welcome to the About Page");
    } else {
        res.end(`<h1>Opps, page doesn't exist..</h1>`);
    }
});

// listen on port 5000
server.listen(5000);

// the response can be viewed on http://localhost:5000/
