// Classes in TS

class Employee {
    name: string;
    age: number = 21;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // adding this: Employee in TS forces the display()
    // to be run only by an instance of class Employee
    display(this: Employee) {
        console.log(`Name: ${this.name} | Age: ${this.age}`);
    }
}

const emp1 = new Employee("Abdur", 21);
emp1.display(); // no error

// create a copy of the emp1 with a display method
const emp1_copy = {
    display: emp1.display,
};

emp1_copy.display(); // error [emp1_copy is not an instance of Employee]

// create a copy of the emp1 with a name and age property along with a display method
const emp1_copy2 = {
    name: emp1.name,
    age: emp1.age,
    display: emp1.display,
};

emp1_copy2.display(); // no error, this.name and this.age are now resolved
