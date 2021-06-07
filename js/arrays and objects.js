// Objects (stores key: value pairs) -----------
let employee = {
    name: 'Abdur',
    salary: 10,
    gender: 'male'
}
console.log(employee);

// accessing elements of an object
console.log(employee.salary);
console.log(employee['name']);

// Arrays (special type of object) --------------
let student = ['Abdur', 10, 'male', undefined]
let teacher = new Array('Abdur', 10, 'male', undefined)  //same as above
console.log(student);

// accessing elements of an array
console.log(teacher[2]);

// length of an array
console.log(teacher.length);

// finding the position of an array element
console.log(student.indexOf('male'));

// sorting an array (inplace)
let x = [9, 5, 2, 4, 9, 6, 1];
console.log(x.sort());

// pushing an element at the end of an array
x.push(10);
x.pop();
console.log(x);

// pushing and popping an element at the beginning of an array
x.unshift(89);   // push
x.shift();       // pop
console.log(x);

// reverse an array
x.reverse();
console.log(x);

// create an empty array of length 5
let y = new Array(5)
console.log(y)