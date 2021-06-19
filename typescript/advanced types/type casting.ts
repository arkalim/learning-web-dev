// type casting is used to tell the compiler that a certain variable
// will be of a certain type if the TS is not able to automaticlly infer that

// TS doesn't scrape the HTML file to find out the exact type of HTML elements.
// So, we need to cast the type of userInput from HTMLElement to
// HTMLInputElement to access the value property
const userInput = document.getElementById("user-input") as HTMLInputElement;
userInput.value = "Hey there!";

// ! tells the TS compiler that this expression will never return null
const button = document.querySelector("btn")!;
