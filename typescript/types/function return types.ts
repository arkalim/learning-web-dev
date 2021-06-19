
// explicitly specifying the return type
function add(n1: number, n2: number): number {
    return n1 + n2
}

// TS has the void return type which basically means 
// that the function doesn't return anything
// void is not available in JS
function greet(name: string): void {
    console.log('Hello ' + name)
}

// In JS, a function that returns nothing actually returns undefined

// Even if the return type of a function is void 
// and we return something from its body, the returned
// value will not be used. It will be ignored by the compiler