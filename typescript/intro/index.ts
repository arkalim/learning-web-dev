const button = document.getElementById("btn")

// ! tells the TS compiler that this element will never be null
// as HTMLInputElement typecasts the num1 and num2
const num1 = document.getElementById("num1")! as HTMLInputElement
const num2 = document.getElementById("num2")! as HTMLInputElement

// by default arguments num1 and num2 can take any type of value
// to be more explicit, we can specify their types
const add = (num1: number, num2: number) => {
    return num1 + num2
}

button.addEventListener("click", () => {
    // the value from HTML input element is string, 
    // so we need to convert it into a number using +
    console.log(add(+num1.value, +num2.value))
})