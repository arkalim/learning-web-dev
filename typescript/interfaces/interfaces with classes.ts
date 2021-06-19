interface Greetable {
    name: string;
    greet(): void;
}

interface Displayable {
    display(): void;
}

// Person implements Greetable, so it should have a property name and a method greet()
// Person implements Displayable, so it should implement a method display()
// Apart from those, it can have its own set of properties and methods
class Person implements Greetable, Displayable {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hi ${this.name}!`);
    }

    display() {
        console.log(this.name, this.age);
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}
