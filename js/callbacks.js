// Pretend that this response is coming from the server
const students = [
    {name: 'Abdur', department: 'ECE'},
    {name: 'Ahmed', department: 'CSE'},
    {name: 'Arefa', department: 'Art'},
]

// Callback Functions: function inside another function
// example: forEach is a callback function
students.forEach((student)=>{
    console.log(student.name, student.department);
})

// function to enroll a new student to the students array present in the server
// here, we pass getStudents() as a callback function and run it inside enrollStudents
// such that the enrolling takes place first and only then the getStudents() gets executed
function enrollStudent(student, callback){

    // simulate sending a request to the server which completes in 3 seconds
    setTimeout(() => {
        students.push(student)
        console.log(`${student.name} has been enrolled in ${student.department}.`);

        // run the callback function after the student has been enrolled
        callback();
    }, 3000);

}

// function to fetch the students array present in the server and display it
function getStudents(){

    // simulate sending a request to the server which completes in 1 second
    setTimeout(() => {
        console.log(students)
    }, 1000);

}

// enroll a new student
let newStudent = {name: 'Tahseer', department: 'EEE'};
enrollStudent(newStudent, getStudents);                           