// to be shared with other modules
const abdur = "Abdur Rahman";
const ahmed = "Ahmed Kalim";

// not to be shared (local to this module)
const secret = "Not to be shared";

// export the names using the esports object of the module
module.exports = { abdur, ahmed };

// export as you create variables
module.exports.ages = [21, 17];
