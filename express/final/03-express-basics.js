const express = require("express");
const app = express();

// serve a get request on the home page
app.get("/", (req, res) => {
    res.send("Home Page");
});

// serve a get request on the about page
// we can even add the status code explicitly
app.get("/about", (req, res) => {
    res.status(200).send("About Page");
});

// fallback response
app.all("*", (req, res) => {
    res.status(404).send("Resource not found");
});

// listen to a port
app.listen(5000, () => {
    console.log("server listening on port 5000");
});
