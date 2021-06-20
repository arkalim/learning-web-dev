// class-transformer is a TS library that converts a list of objects to
// a list of instances of a certian class
// command: npm install class-transformer reflect-metadata
import "reflect-metadata";
import { plainToClass } from "class-transformer";

class Person {
    constructor(public name: string, public age: number) {}
}

// list of objects (not instances of Person)
const fetchedPersons = [
    { name: "Abdur", age: 21 },
    { name: "Ahmed", age: 17 },
];

// args: class, list of objects
const classPersons = plainToClass(Person, fetchedPersons);

console.log(classPersons); // type: Person[]
