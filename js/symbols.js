// creating a symbol
const sym1 = Symbol();
const sym2 = Symbol('This is a symbol');  // optional description
const sym3 = Symbol('This is a symbol');  // optional description

console.log(sym1);
console.log(sym2);
console.log(sym3);

// check for equality
console.log(sym2===sym3);

// ------------ Using symbols as unique keys ---------

// create keys using symbols
const name = Symbol('name')
const age = Symbol('age')
const gender = Symbol('gender')

// create an empty object and populate it using the keys
// can't initialize because it will consider the keys as strings
let student = {};

student[name] = 'Abdur';
student[age] = 21;
student[gender] = 'male';

// Print the object
console.log(student);

// Print the values of the object
// can't do student.name or student["name"] (it will consider name as string)
console.log(student[name]);

// symbols are ignored in forIn loops
for(key in student){
    console.log(key, student[key]);  
}

// symbols are ignored in JSON.stringify()
console.log(JSON.stringify(student)); 