// Access the para by its id
let para = document.getElementById('para')

// When para is clicked, run the function
para.addEventListener('click', function alert_the_user(){
    alert('You clicked on Para')
})

// e contains all the info about the event
para.addEventListener('mouseover', (e)=> {
    console.log(e);

    console.log(e.target); // get the clicked
    console.log(e.target.className); // classname of the element
    console.log(e.target.id); // id of the element
    console.log(e.offsetX, e.offsetY); // relative position of the cursor
    console.log(e.clientX, e.clientY); // global position of the cursor 
})