// setTimeOut - Allows us to run the function once after an interval of time
// setInterval - Allows us to run the function repeteadly after an interval of time

function greet(name){
    console.log('Good Morning, ' + name);
}

// run the greet() after 2000 ms
// syntax: setTimeout(func, time, args)
setTimeout(greet, 2000, 'Abdur');

// setting and clearing timeout
timeout = setTimeout(greet, 5000, 'Ahmed');  // returns a unique ID which can be used to clear timeout
clearTimeout(timeout);

// setInterval
// run the greet func repeatedly after 1 sec
interval = setInterval(greet, 1000, 'Arefa');
clearInterval(interval)

// a function to display time 
function displayTime(){
    time = new Date();
    console.log(time);
}

// refresh time every second
setInterval(displayTime, 1000)