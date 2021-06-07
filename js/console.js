// logging any data in the console
console.log('Hello', 50);
console.log({name: 'Abdur', year: 4});  // logging a js object

// displaying js object in tabular form
console.table({name: 'Abdur', year: 4});

// warning
console.warn('This is a warning message');

// error
console.error('The is an error message');

// clear the console
console.clear();

// time taken to run the code
// do not clear the console in between console.time and console.timeEnd
console.time('sample_timestamp')
for(let i=0; i<10000; i++);  //delay
console.timeEnd('sample_timestamp')

// check for a condition
let age = 17;
console.assert(age >= 18, 'You must be 18 or older to proceed')