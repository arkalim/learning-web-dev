// never type

// functions that throw errors never return anything, 
// so their return type can be specified as never 
// this makes the code easier to follow
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}