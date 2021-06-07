
// if-else statement --------------------
let age = 19;

if(age >= 21){
    console.log("You can enter the bar!");
}
else if(age < 21 && age>=18){
    console.log("Cold drink only please");
}
else if(age == 60 || age == 0){
    console.log("Go retire man!")
}
else{
    console.log("Entry restricted");
}

// switch-case statement ----------------
// it can only used to test equality
// break is used to prevent fall through
switch (age) {
    case 18:
        console.log("Maturity Age")
        break;

    case 20:
        console.log("Can enter bars")
        break;

    default:
        console.log("Age unknown")
        break;
}

// conditional statement ---------------
// ternary operator
let a = 9;
let isDone = a <= 9? true : false;
console.log(isDone);