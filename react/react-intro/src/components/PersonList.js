import React from "react";
import Person from "./Person";

// This component is only responsible for rendeding the list
function PersonList() {
    // list of objects
    const persons = [
        {
            id: 1,
            name: "Abdur",
            age: 21,
            skill: "React",
        },
        {
            id: 2,
            name: "Ahmed",
            age: 17,
            skill: "JS",
        },
        {
            id: 3,
            name: "Arefa",
            age: 15,
            skill: "python",
        },
    ];

    // create a list of JSX by calling Person component which contains the JSX
    // this is the recommended way to handle JSX (refactor JSX into a separate component)
    // Here, we are passing the person array to the Person component
    // We also need to include a unique key attribute for each child of the list (prevents warning)
    // this key attribute is not a prop and cannot be accessed in the child component
    // the key attribute gives a stable id to the list elements and helps react identify
    // which items have changed, added or removed. (Efficient update of UI)
    const personList = persons.map((person) => <Person person={person} key={person.id} />);

    return <div>{personList}</div>;
}

export default PersonList;
