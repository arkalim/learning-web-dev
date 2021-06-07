// create a map object
const myMap = new Map();

// create keys
const key1 = 'myStr', key2 = {}, key3 = function(){};

// set the map values
myMap.set(key1, 'This is the value of key 1');
myMap.set(key2, 'This is the value of key 2');
myMap.set(key3, 'This is the value of key 3');

// print the map object
console.log(myMap);

// getting values from a map
let value1 = myMap.get(key1);
console.log(value1);

// size of the map
console.log(myMap.size)

// iterate through the map using forOf loop
for(let [key, value] of myMap){
    console.log(key, value);
}

// iterate through the map using forEach loop
myMap.forEach((value, key)=>{
    console.log(key, value);
})

// iterate through the keys of a map
for(let key of myMap.keys()){
    console.log(key);
}

// iterate through the values of a map
for(let value of myMap.values()){
    console.log(value);
}

// convert map to array
let myArray = Array.from(myMap);
console.log(myArray);

// convert map keys to array
let myKeysArray = Array.from(myMap.keys());
console.log(myKeysArray);

// convert map values to array
let myValuesArray = Array.from(myMap.values());
console.log(myValuesArray);
