// discriminated union is a pattern where we place a common property in
// every object in the union which describes that object
// It helps in type safety when working with objects and union types

interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Mammal {
    type: "mammal";
    runningSpeed: number;
}

type Animal = Mammal | Bird;

function moveAnimal(animal: Animal) {
    let speed: number;

    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "mammal":
            speed = animal.runningSpeed;
            break;
    }

    console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
