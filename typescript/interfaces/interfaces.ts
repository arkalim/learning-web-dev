// Interfaces are used to create data types for objects
// We can't assign values and define methods inside interfaces
// Interfaces are availabe only in TS

interface Employee {
    // properties
    // only "readonly" access modifier can be used with interfaces
    // private, protected and public can't be used
    readonly name: string;
    age: number;

    // methods
    show(): void;
}

// interfaces are used as data types
let emp1: Employee;

emp1 = {
    name: "Abdur",
    age: 21,

    show() {
        // object properties are accessed using this keyword
        console.log(this.name, this.age);
    },
};
