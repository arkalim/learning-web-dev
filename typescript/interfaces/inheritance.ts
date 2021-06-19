// An interface can extend multiple interfaces
// The type definitions are just merged in the final interface

interface Named {
    name: string;
}

interface Aged {
    age: number;
}

interface Greetable extends Named, Aged {
    greet(): void;
}

class Person implements Greetable {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hi ${this.name}!`);
    }
}
