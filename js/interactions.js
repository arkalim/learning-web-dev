// Alert in in-browser JS
// does not return anything
alert("This PC belongs to ARK")

// Prompt (asking user to enter something)
// returns string
// syntax: prompt(msg, default_arg)
let name = prompt("What is your name?", "Guest")
console.log(name)

// Confirm (asking user if he is sure)
// returns boolean
let deletePost = confirm("Do you really want to delete this post?")
console.log(deletePost)
