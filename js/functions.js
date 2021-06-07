// Function definition
// msg has the default argument 
function greet(name, msg='Hey'){
    console.log(msg + ', ' + name);
}

// function call
greet('Abdur', 'Hello');
console.log(greet('Ahmed'))   // returns undefined

// function with return
function add_num(a, b, c){
    return a + b + c;
    // anything written in the function after the return statement will not be executed (unreachable code)
}

console.log(add_num(1, 2, 3));
