// Partial Utility Type

interface Course {
    title: string;
    description: string;
    completeDate: Date;
}

function createCourse(title: string, description: string, date: Date): Course {
    // create a partial object (properties are optional)
    // this will allow us to create an empty object course of type Course
    let course: Partial<Course> = {};

    // add properties to this partial object
    course.title = title;
    course.description = description;
    course.completeDate = date;

    // cast the partial object to object and return
    return course as Course;
}

// Readonly Utility

const names: Readonly<string[]> = ["Abdur", "Rahman", "Kalim"];

names.push("Hello"); // error
