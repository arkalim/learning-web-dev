// for Loop to print from 0 to 4
for(let i=0; i<5; i++){
    console.log(i);
}

// while loop to print from 0 to 4
let i = 0;
while(i<5){
    console.log(i)
    i++;
}

// do-while loop to print from 0 to 4
let j = 0;
do{
    console.log(j);
    j++;
}while(j<5);

// iterate through an array or collection using for loop
let friends=['Chandler', 'Joey', 'Monica', 'Rachel'];
for(let index=0; index < friends.length; index++){
    console.log(friends[index]);
}

// The above iteration can also be done like this using forOf loop
for (element of friends){
    console.log(element);
}

// The above iteration can also be done like this using forEach loop
friends.forEach((element) => {
    console.log(element);
})

// Iterate over objects using forIn loop
let employee = {
    name: 'Abdur',
    salary: 10,
    gender: 'male'
}

for (key in employee){
    console.log(key + ': ' + employee[key]);
}

// Iterate over characters in a string (forIn and forOf)
const myString = 'Hey there! My name is Abdur Rahman';
for (char in myString){
    console.log(char);
}