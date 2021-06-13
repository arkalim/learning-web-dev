const express = require("express");
const { people } = require("../data");

// create a router object
const router = express.Router();

// import the controllers
const {
    getPeople,
    addPeople,
    updatePeople,
    deletePeople,
} = require("../controllers/people");

// ----- All the route handlers for the url /people

// GET method to read the data
router.get("/", getPeople);

// POST method to add data
router.post("/", addPeople);

// PUT method to update data
router.put("/:id", updatePeople);

// DELETE method to delete an item
router.delete("/:id", deletePeople);

// Export the router object
module.exports = router;
