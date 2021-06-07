
// function to fetch data from a url
function getData(url){
    // fetch command runs in the background while the remaining code executes
    fetch(url).then(response => response.json())
    .then(data => console.log(data));
}

// get the data from the url and display it
let get_url = 'https://api.github.com/';
getData(get_url);

// function to post data to a url
function postData(url, data){

    let params = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    
    // fetch command runs in the background while the remaining code executes
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data));
}


// post data to a url
let post_url = 'https://dummy.restapiexample.com/api/v1/create';
let data = {"name":"test","salary":"123","age":"23"};
postData(post_url, data);
