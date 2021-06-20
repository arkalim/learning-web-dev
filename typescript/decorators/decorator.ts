// decorator function is run once when the decorated class is
// defined and not when instances of that class are created
function Decorator(constructor: Function) {
    console.log("Decorator is run");
}

@Decorator
class Person {
    name = "Abdur Rahman";
    constructor() {
        console.log("Creating an instance of Person");
    }
}

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();
