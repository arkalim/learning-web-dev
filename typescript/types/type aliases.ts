// we can create aliases for types

// union type
type StringOrNumber = string | number

// literal type
type methods = 'push' | 'pull' | 'get'

// object type
type User = {
    name: string;
    age: number;
}

// usage
const num: StringOrNumber = 'Hello There'
const process: methods = 'get'
const newUser: User = {name: "Abdur", age: 21}