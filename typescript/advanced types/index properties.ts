// index properties are used to create objects in which we don't
// know in advance the number of properties and their keys and values

interface Errors {
    // the below expression means we can have any number of keys
    // that are of type string and their values are of type string or number
    // prop is just an identifier
    [prop: string]: string | number;
}

const errorBag: Errors = {
    errorCode: 1,
    email: "Not a valid email",
    typeError: "Type not defined",
};
