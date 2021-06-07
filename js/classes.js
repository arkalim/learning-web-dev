// Classes are blueprints to create an object
class Employee{

    // class constructor which is run everytime an object of this class is created
    constructor(name, salary, age){

        // properties
        this.name = name;
        this.salary = salary;
        this.age = age;
    }

    // methods (functions)
    getInf0(){
        console.log(`My name is ${this.name}. I am ${this.age} years old and my annual earning is Rs${this.salary}`);
    }

    // static methods (don't require object to operate)
    static companySlogan(){
        console.log('I love my company!!!'); 
    }
}

// if we don't pass the required arguments to the constructor, the object properties will be undefined by default
emp1 = new Employee();
console.log(emp1);

// calling the class methods
emp2 = new Employee('Abdur Rahman', 1200000, 21);
emp2.getInf0();

// static functions can be called directly by the class
Employee.companySlogan();