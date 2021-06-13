const express = require("express");
const app = express();

// list of objects as data
const { products } = require("./data");

app.get("/", (req, res) => {
    // send json data
    res.json(products);
});

app.all("*", (req, res) => {
    res.status(404).send("Resource not found");
});

app.listen(5000, () => {
    console.log("server listening on port 50000...");
});
