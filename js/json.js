// JSON is used to transfer data in API calls

// create a JSON object
let jsonObj = {
    name: 'Abdur Rahman',
    roll: 108117001,
    food: 'Chicken Biriyani'
}
console.log(jsonObj)

// to send a JSON object via web, we need to convert it into a string
let jsonString = JSON.stringify(jsonObj);
console.log(jsonString)

// edit the string
jsonString = jsonString.replace('Chicken Biriyani', 'Mutton Biriyani')
console.log(jsonString)

// convert the string back to object
let jsonObj_ = JSON.parse(jsonString)
console.log(jsonObj_)