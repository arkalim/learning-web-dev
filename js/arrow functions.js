// Arrow Functions
let greet = () => {
    console.log('Good Morning');
}

greet();

// using arrow function with setTimeout
// here, we don't need to define a function separately (arrow function without name)
setTimeout(() => {
    console.log('Good Morning');
}, 3000);

// arrow function to return sum of two numbers
let sum = (a, b)=>{
    return a + b;
}
console.log(sum(4,8));

// shortcut for the above func
let sum_ = (a, b) => a+b;
console.log(sum(4,8));

// arrow func to return square of a number
// single argument, so no need of parenthesis
let square = a => a*a;
console.log(square(9));

// shortcut arrow function for greet
let greet_ = () => console.log('Good Morning');
greet_();

// arrow functions inside objects
let student={
    greetings: 'Hello, ',
    names: ['Abdur', 'Ahmed', 'Arefa'],

    // function of student object
    greet(){

        // this refers to the object
        this.names.forEach((student)=>{

            // arrow function allows us to refer to the parent object using 'this' (lexical this)
            // this is not allowed by normal functions, they search for this in their 
            // own scope and return 'undefined'
            console.log(this.greetings + student);
        });
    }
}

student.greet()