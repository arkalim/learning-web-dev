const express = require("express");
const app = express();

// middleware function to log the request method, url and time
// express passes the req, res and next to middlewares by default
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(method, url, time);

    // we either need to call the next() to send the middleware
    // to the next app.get() or do or do res.send() to terminate the middleware
    next();
};

// middleware is returned in between the url and callback function
app.get("/", logger, (req, res) => {
    res.send("Home");
});
app.get("/about", logger, (req, res) => {
    res.send("About");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});
