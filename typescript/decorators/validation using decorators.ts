// Validation using Decorators

// ValidatorConfig: {"Course":{"title":["non-empty"],"price":["positive"]}}
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[];
    };
}

const registeredValidators: ValidatorConfig = {};

function NonEmpty(target: any, propName: string) {
    const className = target.constructor.name;
    registeredValidators[className] = {
        ...registeredValidators[className],
        [propName]: ["non-empty"],
    };
}

function PositiveNumber(target: any, propName: string) {
    const className = target.constructor.name;
    registeredValidators[className] = {
        ...registeredValidators[className],
        [propName]: ["positive"],
    };
}

// function to validate an object based on the validators attached to
// the properties of that object
function validate(obj: any) {
    const className = obj.constructor.name;
    const objValidatorConfig = registeredValidators[className];

    // if no validators are attached to the properties
    if (!objValidatorConfig) {
        return true;
    }

    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "non-empty":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @NonEmpty
    title: string;

    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleElement = document.getElementById("title") as HTMLInputElement;
    const priceElement = document.getElementById("price") as HTMLInputElement;

    const title = titleElement.value;
    const price = +priceElement.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert("Invalid Input");
        return;
    }
    console.log(createdCourse);
});
