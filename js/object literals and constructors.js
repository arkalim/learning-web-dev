// Object literals for creating objects
// This is not OOP
let car = {
    // Properties
    name: 'Audi A8',
    color: 'Red',
    topSpeed: 120,

    // method
    run: (speed) => {
        console.log(`Car is running at ${speed} kmph.`);
    }
}

// Create an object constructor (template for creating objects)
function Car(name, color, topSpeed){

    // properties
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;

    // method
    this.run = (speed) => {
        console.log(`Car is running at ${speed} kmph, but it's top speed is ${this.topSpeed} kmph.`);
    }
}

// Create objects using the constructor (OOP)
let car1 = new Car('Mercedes', 'Blue', 180);
let car2 = new Car('BMW', 'White', 210);