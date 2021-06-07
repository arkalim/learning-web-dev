// generator function
// everytime the next method is called on the generator, it executes from the 
// next line where it stopped previously until it encounters a yield statement
function* numberGen(){
    console.log('Yielding 1');
    yield 1;
    console.log('Yielding 2');
    yield 2;
    console.log('Yielding 3');
    yield 3;
    console.log('Yielding 4');
    yield 4;
}

// create a generator object (each generator object can only be iterated once)
numbers = numberGen();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

// generator function to generate whole numbers
// each number is generated only when the generator is called
function* wholeNumGen(){
    let i = 0;
    while(true){
        yield i++;
    }
}

wholeNumbers = wholeNumGen();

for(let i=0; i<10; i++){
    console.log(wholeNumbers.next().value);
}