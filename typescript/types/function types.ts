// Function types

function add(n1: number, n2: number): number {
    return n1+n2
}

// function1 can store a pointer to any function
let function1: Function = add
function1(1, 2);;

// function2 can store a pointer to any function 
// that takes 2 numbers and returns a number
let function2: (a: number, b: number) => number;
function2 = add
function2(1, 2)

// callback functions
function addAndHandle(n1: number, n2: number, handler: (num: number) => void) {
    const result = n1 + n2
    handler(result)
}

addAndHandle(1, 2, (num) => {
    console.log('Result is: ' + num)
})