// function to merge two objects

// here A and B can be any type (unconstrained)
function merge<A, B>(a: A, b: B) {
    return { ...a, ...b };
}

const nameAndJob = {
    name: "Abdur",
    job: {
        title: "SDE",
        company: "Apple",
    },
};

const id = {
    id: 1,
};

const mergedObject = merge(nameAndJob, id);

// now the TSC knows that the return type of merge is A & B
console.log(mergedObject.job.title);

// --------------------------------------------------------

interface Lengthy {
    length: number;
}

// a function that takes a data that implements a length property
function getLength<T extends Lengthy>(element: T): [T, string] {
    return [element, `Length: ${element.length}`];
}

console.log(getLength("Hey there!")); // string
console.log(getLength(["Abdur", "Rahman", "Kalim"])); // array
console.log(getLength(23)); // number: error as it doesn't have a length property
