// Callback functions for each method in the route /people

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const addPeople = (req, res) => {
    // express.json() allows this to work
    const { name } = req.body;

    // Logic to add the item

    res.status(201).json({ success: true, person: name });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
    // id of the item to be deleted
    const { id } = req.params;

    // Logic to delete the item

    res.status(201).json({
        success: true,
        id: id,
        msg: `Person of ID ${id} was deleted`,
    });
};

// Export
module.exports = {
    getPeople,
    addPeople,
    updatePeople,
    deletePeople,
};
