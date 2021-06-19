// unknown type

// unknown type can store anything
let personName: unknown;
let userName: string;

personName = 100
personName = "Abdur"

if (typeof personName === 'string') {
    // unknown type is a little more restrictive than any
    // so, we must ensure that the data type it stores matches 
    // a strict data type before we can assign its value to a 
    // variable of a more restrictive data type
    userName = personName
}