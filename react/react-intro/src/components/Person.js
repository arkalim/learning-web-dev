import React from "react";

// This component is only responsible for rendering the JSX
function Person({ person }) {
    return (
        <div>
            <h2>
                I am {person.name}, aged {person.age} and I know {person.skill}.
            </h2>
        </div>
    );
}

export default Person;
