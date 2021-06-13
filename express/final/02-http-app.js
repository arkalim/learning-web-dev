const fs = require("fs");
const http = require("http");

// In this case we can read the file once and store it in the RAM
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeLogo = fs.readFileSync("./navbar-app/logo.svg");
const homeJS = fs.readFileSync("./navbar-app/browser-app.js");

// req and res reference the request and response objects resp.
const server = http.createServer((req, res) => {
    // access the request method
    console.log(`${req.method} request called`);

    // relative url
    const url = req.url;
    switch (url) {
        // home page
        case "/":
            // response header (metadata sent by the server)
            // status code 200: request received successfully
            res.writeHead(200, { "content-type": "text/html" });

            // write the response
            res.write(homePage);
            break;

        // styles.css
        case "/styles.css":
            res.writeHead(200, { "content-type": "text/css" });
            res.write(homeStyles);
            break;

        // logo.svg
        case "/logo.svg":
            res.writeHead(200, { "content-type": "image/svg+xml" });
            res.write(homeLogo);
            break;

        // browser-app.js
        case "/browser-app.js":
            res.writeHead(200, { "content-type": "text/javascript" });
            res.write(homeJS);
            break;

        // about page
        case "/about.html":
            res.writeHead(200, { "content-type": "text/html" });
            res.write("<h1>About Page</h1>");
            break;

        // 404  page not found
        default:
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<h1>Page not found</h1>");
            break;
    }

    // This tells the requesting computer that this is the end of the response
    // must be called on each response
    res.end();
});

server.listen(5000);
