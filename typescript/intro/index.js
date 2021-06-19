var button = document.getElementById("btn");
// ! tells the TS compiler that this element will never be null
// as HTMLInputElement typecasts the num1 and num2
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
// by default arguments num1 and num2 can take any type of value
// to be more explicit, we can specify their types
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    // the value from HTML input element is string,
    // so we need to convert it into a number using +
    console.log(add(+num1.value, +num2.value));
});
