// decorator factory returns a decorator function
function Greet(message: string) {
    return function (constructor: Function) {
        console.log(message);
    };
}

// customizable decorator function using decorator factory
@Greet("Hello World")
class Person {
    name = "Abdur Rahman";
    constructor() {
        console.log("Creating an instance of Person");
    }
}

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();
