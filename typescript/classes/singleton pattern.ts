// Singleton Pattern
// It is used to ensure that only one instance of a class can be created
// It is achieved using private constructors

abstract class Employee {
    constructor(protected readonly name: string, public age: number) {}
}

class Coder extends Employee {
    // private static property of type Coder
    private static instance: Coder;

    // private constructor
    // cannot be directly called from outside
    private constructor(
        name: string,
        age: number,
        public lang: "Python" | "JavaScript"
    ) {
        super(name, age);
    }

    // a static method to create an instance of Coder class
    // if an instance already exists, return that. Else, return a new one
    static getInstance(
        name: string,
        age: number,
        lang: "Python" | "JavaScript"
    ) {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new Coder(name, age, lang);
            return this.instance;
        }
    }
}

// create an instance of Coder class
const coder1 = Coder.getInstance("Abdur", 21, "JavaScript");

// a new instance will not be created,
// coder1 will be returned instead and will be stored in coder2
const coder2 = Coder.getInstance("Ahmed", 18, "Python");
