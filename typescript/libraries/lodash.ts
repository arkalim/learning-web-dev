// most popular JS libraries have the translation types library which allows it to
// be used with TS compiler

// lodash library is designed for JS and it doesn't come with the TS types by default
// so, we need to install @types/lodash to use lodash library without errors
// command: npm install --save-dev lodash @types/lodash
import _ from "lodash";

console.log(_.shuffle([1, 2, 3]));
