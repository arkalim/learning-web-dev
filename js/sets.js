// Sets store unique values

// create a new set
const mySet = new Set();

// add values to the set
mySet.add('Abdur');
mySet.add('Ahmed');
mySet.add(true);
mySet.add([1, 2, 3, 4, 5]);
mySet.add({});

// print the set
console.log(mySet);

// get the size of the set
console.log(mySet.size);

// check if an element is present in the set
console.log(mySet.has('Ahmed'));

// remove values from the set
mySet.delete('Ahmed');
console.log(mySet);

// initialize set upon creation
const secondSet = new Set(['Arefa', 'Ahmed', true, [1, 2, 3, 4, 5], {}]);
console.log(secondSet);

// iterating a set (forOf)
for(item of mySet){
    console.log(item);
}

// iterating a set (forEach)
mySet.forEach((item)=>{
    console.log(item);
})