// initializing date object using Date constructor
let now1 = new Date()
console.log(now1)

// yyyy-mm-dd
let now2 = new Date('2029-09-12')
console.log(now2)

// Date(year, month, date, hour, minute, second, millisecond)
let now3 = new Date(2030, 4, 3, 56, 45, 245)
console.log(now3)

// extracting components separately
let date = new Date()

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
