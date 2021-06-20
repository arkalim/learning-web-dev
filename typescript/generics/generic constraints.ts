// function to merge two objects

// here, A and B must be of object type (constrained)
function merge<A extends object, B extends object>(a: A, b: B) {
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

// if we pass any other data type to merge(), TSC will give error
const mergedObject = merge(nameAndJob, id);

// now the TSC knows that the return type of merge is A & B
console.log(mergedObject.job.title);

// --------------------------------------------------------------
// keyof constraint

// function to return the value of the object given the key
function getValue<O extends object, K extends keyof O>(obj: O, key: K) {
    // now the TSC is sure that the "key" will be a valid key in "obj"
    return obj[key];
}

getValue({ name: "Abdur" }, "name");
getValue({ name: "Abdur" }, "age"); // will throw error
