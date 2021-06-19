// classes having abstract methods must be abstract
// their instance can't be created, they can only be inherited
abstract class Employee {
    // shorthand way to construct class properties
    constructor(protected readonly name: string, public age: number) {}

    // abstract method
    // all the inheriting classes must implement this method
    // here, we just have to provide the structure of the abstract method
    abstract show(this: Employee): void;
}

class Coder extends Employee {
    constructor(
        name: string,
        age: number,
        public lang: "Python" | "JavaScript"
    ) {
        super(name, age);
    }

    // inheriting class must define the abstract methods of the base class
    show() {
        console.log(this.name, this.age, this.lang);
    }
}
