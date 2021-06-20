// generic types in TS are those types that have an associated type

// Arrays are generic types. Being generic, arrays get
// to know what data will be stored in them

// array of strings or numbers (string | number)[]
let stringsOrNumbers: Array<string | number>;

// Promises are generic types. Being generic, promises get to know
// what data they will return

// A promise that returns a string
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hey there");
    }, 2000);
});

promise.then((res) => {
    // now the TS compiler knows that the promise will return a string
    res.length;
});
