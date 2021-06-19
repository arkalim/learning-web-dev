function add(n1: number, n2: number, showResult: boolean, message: string) {
    const result = n1 + n2
    if (showResult) {
        console.log(message + result)
    } else {
        return result
    }
}

// when we declare a variable, we should specify it's type
let num1: number
num1 = 5

// when we initialize a variable, TS automatically infers its type
const num2 = 5.2

// explicitly telling the type during initialization
const printResult: boolean = true
const phrase = "Result: "

add(num1, num2, printResult, phrase)