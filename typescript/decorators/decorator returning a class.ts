// decorator returning a class adds additional functionality to the original class

// decorator to display the name property of a class in the DOM
// T extends a new object that has a constructor function that returns
// an object having a name property of type string
function displayNameInDOM<T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
) {
    // return a new class extending from the original class
    return class extends originalConstructor {
        // _ acts as unused var
        constructor(..._: any[]) {
            // call the original class constructor
            super();

            const bodyElement = document.getElementsByTagName("body")[0];
            if (bodyElement) {
                bodyElement.innerHTML += `<h1>${this.name}</h1>`;
            }
        }
    };
}

@displayNameInDOM
class Person {
    name = "Abdur Rahman";
}

// decorator is run when the instance of the class is created
// and not when the class is defined
const person = new Person();
