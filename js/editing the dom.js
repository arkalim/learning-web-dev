// Create a new element --------
let newLi = document.createElement('li');
newLi.id = 'dynamicLi';                     // adding an attribute
newLi.innerText = 'Added dynamically';
let ul = document.querySelector('#navbar'); // parent element
ul.appendChild(newLi);                      // add it to the parent element

// replace an element ----------
let newLi2 = document.createElement('li');
newLi2.innerText = 'Replaced dynamically';
newLi.replaceWith(newLi2)                   // replace the original element with a new one

// remove a child from a parent element
ul.removeChild(newLi2);
