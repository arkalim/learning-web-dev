// ----------- Array Destructuring -----------

[a, b] = [13, 27];
console.log(a, b);  // a = 13, b = 27

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a);  // a = 1
console.log(b);  // b = 2
console.log(c);  // c = 2
console.log(d);  // d = [4, 5, 6, 7, 8, 9]

const fruits = ['Apple', 'Oranges', 'Bananas'];
[a, b, c] = fruits;
console.log(a, b, c); // a = Apple, b = Oranges, c = Bananas

// ---------- Object Destructuring ------------

({a, b, c} = {a:34, b:45, d: 38});
console.log(a, b, c);  // a = 34, b = 45, c = undefined

({a, b, ...c} = {a:34, b:45, c:56, d: 38, e:69});
console.log(a, b, c);  // a = 34, b = 45, c = {c: 56, d: 38, e: 69}

const student = {
    name: 'Abdur',
    age: 21,
    gender: 'male',
    salaried: true,
}

let {name, age, gender, pay} = student;
console.log(name, age, gender, pay) // name = Abdur, age = 21, gender=21, pay=undefined