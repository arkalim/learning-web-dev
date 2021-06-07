// ---------- method declaration ----------
const person = {
    name: "Abdur Rahman",

    // methods
    walk: function () {}, // non ES6 syntax
    talk() {}, // non ES6 syntax
};

// -------------- array maps ---------------
const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}<\li>`);
console.log(items);

// --------- object destructuring ----------
const student = {
    name: "Abdur",
    roll: 108117001,
    branch: "ECE",
};

// extract only the required items
const { name, branch } = student;

// extract only roll and save it in rollNumber
const { roll: rollNumber } = student;

// ------------ Spread Operator ------------
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// spread operator gives all the elements of the array
const combinedArray = [...firstArray, ...secondArray];

// we can even insert items in between
const newArray = ["Beginning", ...firstArray, "Between", ...secondArray, "End"];

// Spread operator can also be used to spread the properties and methods of an object
const department = {
    classRoom: 104,
    branch: "ECE",

    printDept() {
        console.log(this.branch);
    },
};

// spread and combine two objects and add an extra property
const college = { ...student, ...department, location: "India" };

// ---------------- Classes -------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        // call the base class constructor with the required arguments
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

let teacher1 = new Teacher("Abdur", 21, "Physics");
teacher1.walk();
teacher1.teach();

// --------------- Modularity ----------------
// Instead of writing multiple classes or components in a single file,
// we write separate components in separate JS files (modules).
// Starting from ES6, modularity is native to JS
// Objects defined in each module are private by default,
// we make it public by exporting it outside the module
// and importing it in other modules

// Modularizing the above two classes

// Person.js
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

// Teacher.js
import { Person } from "./Person";

export class Teacher extends Person {
    constructor(name, age, subject) {
        // call the base class constructor with the required arguments
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

// index.js
import { Teacher } from "./Teacher";
let teacher1 = new Teacher("Abdur", 21, "Physics");
teacher1.walk();
teacher1.teach();

// ------------- Default Export ---------------

// Default export is usually used when we only have a single object to export
// Here, the exported object is the root object (main object) that is exported
// We can even have some named exports along with default export
// In named export, a wrapper object is passed with the exported objects as its children,
// which is destructured when importing

// Person.js
export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

export function func() {
    console.log("This is sample function");
}

// Teacher.js
import Person, { func } from "./Person";

export class Teacher extends Person {
    constructor(name, age, subject) {
        // call the base class constructor with the required arguments
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} is teaching.`);
    }
}
