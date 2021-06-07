// Pretend that this response is coming from the server
const students = [
    { name: 'Abdur', department: 'ECE' },
    { name: 'Ahmed', department: 'CSE' },
    { name: 'Arefa', department: 'Art' },
]

// function to fetch the students array present in the server and display it
function getStudents() {

    // simulate sending a request to the server which completes in 1 second
    setTimeout(() => {
        console.log(students)
    }, 1000);

}

// function to enroll a new student to the students array present in the server
function enrollStudent(student) {
    return new Promise((resolve, reject) => {

        // simulate sending a request to the server which completes in 3 seconds
        setTimeout(() => {

            // send the request
            let response = students.push(student)

            // if no error occurred, promise has been resolved
            if (response != undefined){
                // resolve will be replaced by the code present in enrollStudent.catch()
                resolve(student);
            }

            // if error occurred, promise has been rejected
            else{
                // resolve will be replaced by the code present in enrollStudent.catch()
                // the error message is passed to the func present in enrollStudent.catch()
                reject("Couldn't enroll the student");
            }
        }, 3000);
    })
}

// enroll a new student
let newStudent = { name: 'Tahseer', department: 'EEE' };
enrollStudent(newStudent).then((student) => {

    // If the promise is resolved, the code in this block will run
    console.log(`${student.name} has been enrolled in ${student.department}.`);

    // Only when the promise is fulfilled (student is enrolled), the students will be fetched
    getStudents();

}).catch((message) => {

    // If the promise is rejected, the code in this block will run
    console.log(message);
})
