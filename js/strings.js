// Strings
var name = 'Abdur Rahman';
var college = 'NIT Trichy';

// Template Literals (available in ES6)
// In this way, we can even use multiple line strings
var sentence = `${name} is a really "nice" guy. 
                He is a 'final-year' student at 
                ${college}`;
console.log(sentence);

// length of a string
console.log("The length of sentence is: " + sentence.length + " characters");

// Escape Sequence Characters
console.log("Abdur\nRahman\nKalim");

// position of the first occurrence of a substring
console.log(sentence.indexOf('is'));

// position of the last occurrence of a substring
console.log(sentence.lastIndexOf('is'));

// slicing a string
// format: string.slice(start_index(inclusive), end_index(exclusive))
console.log(sentence.slice(13, 15));
// format: string.substring(start_index(inclusive), end_index(exclusive))
console.log(sentence.substring(13, 15));
// format: string.substr(start_index(inclusive), length)
console.log(sentence.substr(13, 2));

// replacing a substring
console.log(sentence.replace('Abdur Rahman', 'Ahmed'));

// case conversion
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// trim extra space at the front and back of a string
var example_sentence = '   This   is     a    sentence    ';
console.log(example_sentence.trim());

// extracting characters from a string
console.log(sentence[2]);
console.log(sentence.charAt(2));      // same as above

// checking if a string starts or ends with a substring
console.log(sentence.startsWith('The'));
console.log(sentence.endsWith('Trichy'));

// check if a string contains a substring
console.log(sentence.includes('NIT'));

// splitting a string at spaces
console.log(sentence.split(' '));