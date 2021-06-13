const express = require("express");
const app = express();
const { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse the incoming url to get the payload
app.use(express.urlencoded({ extended: false }));

// parse JSON
app.use(express.json());

// GET method to read the data
app.get("/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

// POST method to add data
app.post("/people", (req, res) => {
    // express.json() allows this to work
    const { name } = req.body;

    // Logic to add the item

    res.status(201).json({ success: true, person: name });
});

// PUT method to update data
app.put("/people/:id", (req, res) => {
    // id of the item to be updated
    const { id } = req.params;

    // new value to be updated
    const { name } = req.body;

    // Logic to update the item

    res.status(201).json({
        success: true,
        id: id,
        person: name,
        msg: `Person of ID ${id} was updated to ${name}`,
    });
});

// DELETE method to delete an item
app.delete("/people/:id", (req, res) => {
    // id of the item to be deleted
    const { id } = req.params;

    // Logic to delete the item

    res.status(201).json({
        success: true,
        id: id,
        msg: `Person of ID ${id} was deleted`,
    });
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});
