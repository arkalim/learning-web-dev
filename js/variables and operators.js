// Print this in the developer console
console.log('Hello World');

// Variables

// var creates global variables
var a = 10;               // int
var b = "Abdur Rahman";   // string
c = 13.57;                // float

// let creates local variables (better alternative to var)
{  //block
    var d = 5;
    let e = 6;
}
console.log(d)
console.log(e)   // will throw an error

// let does not allow re-declaration whereas var does
let x = 6;
let x = 9;       // will throw an error

// constants
const y = 1;
y = 2;           // will throw an error

// Arithmetic Operators
var x = 9;
var y = 7;

// Binary Arithmetic Operators
console.log("The sum of x and y is: " + (x + y))
console.log("The difference of x and y is: " + (x - y))
console.log("The yth power of x is: " + (x ** y))

// Unary Arithmetic Operators
console.log("The increment of x is: " + (x ++)) // Post increment
console.log("The increment of x is: " + (++ x)) // Pre increment
console.log("The increment of x is: " + (-- x)) // Pre decrement
console.log("The increment of x is: " + (x --)) // Post decrement