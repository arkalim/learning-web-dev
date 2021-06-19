let newArray1 = ['swimming', ['hello'], 123]  // flexible type

let newArray2: any[]   // array of anything
newArray2 = ['swimming', ['hello'], 123] 

let hobbies: string[]  // array of strings
hobbies = ['swimming', 'playing']

for(const hobby of hobbies) {
    console.log(hobby.toUpperCase())  // toUpperCase() is availabe to strings
    console.log(hobby.map())  // map() is not availabe to strings (ERROR)
}

// TS will infer the type of this array as (string | number | boolean)[]
// meaning this array can contain either strings or numbers or boolean
let role1 = ["Admin", 12, true]

// tuple: fixed length array
// this is stricter
// role2.push() can still be used to push value in this tuple
let role2: [string, number, boolean] = ["Admin", 12, true]
