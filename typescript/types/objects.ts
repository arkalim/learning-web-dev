// TS automatically infers the object type containing (key, type) pairs
const person = {
    name: "Abdur",
    age: 21
}

// we can explicitly define the object type
// TS will check the number of keys and their types when we create an object
const employee: {
    name: string;
    age: number;
    coder: boolean;
} = {
    name: "Abdur",
    age: 21,
    coder: true
}

// similarly for nested objects
const product: {
    id: string;
    price: number;
    tags: string[],  // array of strings
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}