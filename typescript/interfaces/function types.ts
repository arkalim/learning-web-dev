// we can define a function type using interfaces

// function type that accepts two numbers and returns a number
interface dualNumFunc {
    (a: number, b: number): number;
}

const addFunc: dualNumFunc = (a: number, b: number) => a + b;

console.log(addFunc(1, 2));
