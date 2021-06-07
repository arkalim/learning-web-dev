// Primitive Data Types ----------------

let a = 10;            // number
let naam = 'Abdur';    // string
let end = true;        // boolean
let b = null;          // null
let c;                 // undefined

// print the data type
console.log(typeof naam);
console.log(typeof end);
console.log(typeof c);


// Reference Data Types ----------------

// Arrays
let array = [1, 'r', undefined, true];
console.log(typeof array);    // datatype is object

// Object Literals
let student = {
    name: 'Abdur',
    salary: 2000,
    employed: true
}
console.log(typeof student)  // datatype is object

// Function
function findName(){

}
console.log(typeof findName);// datatype is function

// Date
let date = new Date();
console.log(typeof date);    // datatype is object

// Type Conversion and Type Coercion ------

// convert number to string
let x = String(2345);
console.log(x, typeof x);

// convert string to number
let y = Number('2345');
console.log(y, typeof y);

// convert boolean to string
let z = String(false);
console.log(z, typeof z);

// convert boolean to number
// true: 1 
// false: 0
let m = Number(false);    
console.log(m, typeof m);