// Regular expressions are used to search for a specific pattern or substring inside a string

// Create a string to search
let string = "Hey, my name is Abdur Rahman Kalim. I am 21 years old. My brother's name is Ahmed kalim.";

// ------- Creating a regular expression literal -------

let reg = /Kalim/;

// By default the search it made locally (only the first occurrence is considered)
let globalReg = /Kalim/g;  // search globally

// by default, the match is case sensitive, to make it case insensitive, we need to use i flag
caseInsitiveReg = /Kalim/i;

// global and case insensitive regex
globalCaseInsitiveReg = /Kalim/ig;

// Printing the regex literal
console.log(reg);
console.log(reg.source);  // the value of the regex literal

// ---------------- regex functions -------------------

// exec() returns null for no match and an array with the index of the first occurrence in case of match
let result = reg.exec(string);
console.log(result);

// if there are multiple occurrences
// we can use while loop and search for null to get all the occurrences
console.log(globalReg.exec(string));  // first occurrence
console.log(globalReg.exec(string));  // second occurrence
console.log(globalReg.exec(string));  // third occurrence (null)

// test() returns true if the regex is present in the string else false
console.log(reg.test(string));

// match() returns an array of matches for matched case else null
// it is called on the string and regex is passed as argument
console.log(string.match(globalCaseInsitiveReg));

// search() returns the index of first match else -1
// it is called on the string and regex is passed as argument
console.log(string.search(globalCaseInsitiveReg));

// replace() returns new string with all the replacements
// if regex doesn't have global flag, only the first match will be replaced
let newString = string.replace(globalCaseInsitiveReg, 'Arefa');
console.log(newString);

// ---------------- regex metacharacters -------------------

// match when the string starts with kal
let regex = /^he/i;
console.log(string.match(regex));

// match when the string ends with lim.
regex = /lim.$/i;
console.log(string.match(regex));

// . can replace a character in the regex
regex = /ka.im/gi;
console.log(string.match(regex));

// * can replace 0 or more characters in the regex
regex = /ka*m/gi;
console.log(string.match(regex));

// ? makes the preceeding character optional in the regex
regex = /ka?li?m/gi;   // a and i are optional in kalim
console.log(string.match(regex));

// \ can be used to include special characters
regex = /\./gi;   // match for fullstops
console.log(string.match(regex));

// ---------------- regex character sets -------------------
// [] can be used to specify character sets in the regex

// [lmy] can replace either l, m or y in the regex
regex = /ka[lmy]im/gi;
console.log(string.match(regex));

// [a-z] can replace any small letter in the regex
regex = /ka[a-z]im/gi;
console.log(string.match(regex));

// [A-Z] can replace any capital letter in the regex
regex = /ka[A-Z]im/gi;
console.log(string.match(regex));

// [a-zA-Z] can replace any letter in the regex
regex = /ka[a-zA-Z]im/gi;
console.log(string.match(regex));

// [^lmy] can replace with any character except l, m ands y in the regex
regex = /ka[^lmy]im/gi;
console.log(string.match(regex));

// multiple character sets can also be used
regex = /ka[lmy]i[mnop]/gi;
console.log(string.match(regex));

// [0-9] can replace any number in the regex
regex = /ka[0-9]im/gi;
console.log(string.match(regex));

// [0-9a-zA-Z] can replace any number or letter in the regex
regex = /ka[0-9a-zA-Z]im/gi;
console.log(string.match(regex));

// ---------------- regex quantifiers -------------------
// {} can be used to replace a fixed number of occurrences of a character in the regex

// l{2} will match for 2 occurrences of l
regex = /kal{2}im/gi;  // kallim
console.log(string.match(regex));

// l{0,2} will match for 0 to 2 occurrences of l
regex = /kal{0,2}im/gi;  // kaim, kalim, kallim
console.log(string.match(regex));

// ---------------- grouping -------------------
// () can be used to group character in regex

// (kal){2}im will match for kalkalim
regex = /(kal){2}im/gi;
console.log(string.match(regex));

// Multiple Groupings
regex = /(kal){2}([0-9]im){3}/gi;
let s = 'kalkal8im5im9im-dfdasfasdfadsfa'  // the part before the hyphen will match
console.log(s.match(regex));

// ------------ regex character classes  ----------------

// Word Character (\w)
// \w can replace any letter, number or _ in the regex
regex = /ka\wim/gi;
console.log(string.match(regex));

// \w+ can replace one or more letters, numbers or _ in the regex
regex = /\w+im/gi;
console.log(string.match(regex));

// Non Word Character (\W)
// \W can replace any character except letter, number or _ in the regex
regex = /ka\Wim/gi;
console.log(string.match(regex));

// \W+ can replace one or more characters except letters, numbers or _ in the regex
regex = /\W+im/gi;
console.log(string.match(regex));

// Digit Character (\d)
// \d can replace any number in the regex
regex = /ka\dim/gi;
console.log(string.match(regex));

// \d+ can replace one or more numbers in the regex
regex = /\d+im/gi;
console.log(string.match(regex));

// Non Digit Character (\D)
// \D can replace any character except number in the regex
regex = /ka\Dim/gi;
console.log(string.match(regex));

// \D+ can replace one or more characters except numbers in the regex
regex = /\D+im/gi;
console.log(string.match(regex));

// Space Character (\s)
// \s can replace a blank space characer or \t
regex = /\s/gi;
console.log(string.match(regex));

// \s+ can replace one or more blank spaces or \t
regex = /\s+/gi;
console.log(string.match(regex));

// Non Space Character (\S)
// \s can replace a non blank space characer or \t
regex = /\S/gi;
console.log(string.match(regex));

// \s+ can replace one or more non blank spaces or \t
regex = /\S+/gi;
console.log(string.match(regex));

// Word Boundary Character (\b)
// \b will be matched to the boundary between two words
regex = /name\b/gi;
console.log(string.match(regex));

// ------------ regex assertions  ----------------

// match to kal only if i is the next character
regex = /kal(?=i)/gi;
console.log(string.match(regex));

// match to kal only if i is not the next character
regex = /kal(?!i)/gi;
console.log(string.match(regex));