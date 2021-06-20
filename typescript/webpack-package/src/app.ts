// importing TS files using ES6 modules
// .js should be removed from the module names for webpack
import { add, subtract, multiply, divide } from "./Maths";

console.log(add(3, 2));
console.log(subtract(3, 2));
console.log(multiply(3, 2));
console.log(divide(3, 2));
