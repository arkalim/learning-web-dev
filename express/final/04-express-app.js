const express = require("express");
const app = express();

// send all the static files present in public folder
// the convention is to name this folder as public or static
// index.html is treated as / by default
app.use(express.static("./public"));

app.all("*", (req, res) => {
    res.status(404).send("Resource not found");
});

app.listen(5000, () => {
    console.log("server listening on port 50000...");
});
