// import the names object and destructure it
const { abdur, ahmed, ages } = require("./names");

const abdur_age = ages[0];
const ahmed_age = ages[1];

// import the greet function
const greet = require("./utils");

// Modules - encpsulated code, share only what is needed
greet(abdur, abdur_age);
greet(ahmed, ahmed_age);
