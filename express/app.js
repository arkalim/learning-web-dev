const express = require("express");
const app = express();

// import the router
const people = require("./routes/people");

// static assets
app.use(express.static("./methods-public"));

// parse the incoming url to get the payload
app.use(express.urlencoded({ extended: false }));

// parse JSON
app.use(express.json());

// use the router on the path /people
app.use("/people", people);

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});
