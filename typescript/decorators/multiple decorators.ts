// decorator to display the name property of a class in the DOM
function displayNameInDOM() {
    console.log("Rendering Name");
    return function (constructor: any) {
        const bodyElement = document.getElementsByTagName("body")[0];
        const person = new constructor();
        if (bodyElement) {
            bodyElement.innerHTML += `<h1>${person.name}</h1>`;
        }
    };
}

// decorator to display the date in the DOM
function displayDateInDOM() {
    console.log("Rendering Date");
    return function (constructor: any) {
        const bodyElement = document.getElementsByTagName("body")[0];
        const date = new Date();

        if (bodyElement) {
            bodyElement.innerHTML += `<h3>${date}</h3>`;
        }
    };
}

// multiple decorators
// order of decorator creation is top to bottom
// order of decorator execution is bottom to top
@displayDateInDOM()
@displayNameInDOM()
class Person {
    name = "Abdur Rahman";
}

const person1 = new Person();
const person2 = new Person();
