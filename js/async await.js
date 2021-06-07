// async function returns a promise to complete the tasks inside it at a later time
async function getData(){

    // await tells the compiler to handle that task asynchronously
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;
}

// async function returns a promise
returned_promise = getData()
console.log(returned_promise)

// if the promise is resolved
returned_promise.then(data=> console.log(data));