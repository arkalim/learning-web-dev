// class validator is a TS only library that allows us to do some validation
// command: npm install class-validator
import { IsNotEmpty, IsPositive, validate } from "class-validator";

class Person {
    @IsNotEmpty()
    name: string;

    @IsPositive()
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("", 5.99);

// validate method returns a promise that is always resolved
validate(person1).then((err) => {
    if (err.length > 0) {
        console.log("Error: " + err);
    } else {
        console.log(person1);
    }
});
