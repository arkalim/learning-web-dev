// A class cannot extend multiple classes in both JS and TS

class Employee {
    // shorthand way to construct class properties
    constructor(protected readonly name: string, public age: number) {}

    show(this: Employee) {
        console.log(this.name, this.age);
    }
}

// Developer class extends Employee class
// as long we don't define the constructor,
// the base class constructor is automatically called
// when an instance of derived class is created
class Developer extends Employee {}

class Coder extends Employee {
    // if we explicitly define the derived class constructor
    // we much explicitly call the base class constructor
    constructor(
        name: string,
        age: number,
        public lang: "Python" | "JavaScript"
    ) {
        super(name, age);
    }

    // overriding the base class methods
    show() {
        console.log(this.name, this.age, this.lang);
    }

    getName() {
        // name is protected, thus it can be accessed here
        console.log(this.name);
    }
}

const coder1 = new Coder("Abdur", 21, "JavaScript");
coder1.getName();
