
// Class for employees 
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

// Programmer class inheriting from Employee class
class Programmer extends Employee{

    constructor(name, salary, age, language, os){

        // call the Employee class constructor and pass the required arguments
        super(name, salary, age);

        // properties specific to Programmer class
        this.language = language;
        this.os = os;
    }

    // methods specific to Programmer class
    favoriteLanguage(){
        console.log(`${this.name}'s favorite language is ${this.language}.`);
    }

    favoriteOS(){
        console.log(`${this.name}'s favorite operating system is ${this.os}.`);
    }
}

// Create a Programmer object
programmer1 = new Programmer('Abdur Rahman', 1200000, 21, 'Python', 'Mac OS');
programmer1.favoriteLanguage();
programmer1.favoriteOS();

// static functions cannot be called by the object name
Programmer.companySlogan();