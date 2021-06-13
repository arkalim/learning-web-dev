// common practice to import events as EventEmitter
const EventEmitter = require("events");

// create a new eventEmitter object
const eventEmitter = new EventEmitter();

// listen for an event
// name this event as response
eventEmitter.on("response", () => {
    console.log("execute logic 1");
});

// different callback function to the same event
eventEmitter.on("response", (name) => {
    console.log(`${name} execute logic 2`);
});

// emit the event using the event name
// first we need to listen for the event before emitting
eventEmitter.emit("response");

// we can even pass arguments while emitting
eventEmitter.emit("response", "Abdur");
