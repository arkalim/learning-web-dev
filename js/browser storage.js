// Clear the local storage
localStorage.clear();

// View the content of the local storage
console.log(localStorage);

// Add (key:value) pairs to the local storage
localStorage.setItem('Name', 'Abdur');
localStorage.setItem('Roll', 108117001);
console.log(localStorage);

// Get contents of the local storage using their keys
let name = localStorage.getItem('Name');
let roll = localStorage.getItem('Roll');
console.log(name, roll);

// Remove an item from local storage
localStorage.removeItem('Roll');
console.log(localStorage);

// Add an array to the local storage
// Arrays will be converted to csv values if passed to the setItem()
// So, we will convert them to string before saving and parse them after reading
let culprit = ['Abdur', 'Rahman', 108117001, 'ECE', true];
localStorage.setItem('Student', JSON.stringify(culprit));
console.log(localStorage);

let culprit_ = JSON.parse(localStorage.getItem('Student'));
console.log(culprit_)

// Session Storage has the same methods as above
// Session storage expires when the session expires 
sessionStorage.setItem('Name', 'Abdur');
console.log(sessionStorage);
sessionStorage.clear()