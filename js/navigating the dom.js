// DOM is accessed using the document property of window
console.log(document);

// all tags of DOM
let all = document.all;

// body of DOM
console.log(document.body);

// links in a document
let links = document.links;

// accessing a DOM element using ID
let navbar = document.getElementById('navbar');

// accessing html elements using Class
let containers = document.getElementsByClassName('container');

// accessing html elements using html tags
let divs = document.getElementsByTagName('div');

// accessing html elements using CSS selectors
let sub = document.querySelector('#sub')

// returns all the elements with class container
let container = document.querySelector('.container')

// returns only the first element of type li under #navbar
let first_li = document.querySelector('#navbar>li')


// child nodes, parent nodes and siblings
let childNode = container.childNodes;  // includes comments and texts
let children = container.children;     // ignores comments and texts (used most of the time)
let parentNode = container.parentNode;

console.log(container.firstElementChild); // accessing the first child
console.log(container.lastElementChild);  // accessing the last child
console.log(container.childElementCount); // count the child elements

console.log(navbar.children[3]);       // accessing the 4th child of navbar
let sibling = sub.nextElementSibling;     // next sibling of sub

// modifying CSS of an element
first_li.style.color = 'red';

// accessing inner text and html of an element
let second_li = document.querySelectorAll('#navbar>li')[1]
second_li.innerText = 'New Text';
second_li.innerHTML = "<li>Abdur</li>"