import React from "react";
import { people } from "./people";

// useParams hook will allow us to access the id parameter sent in App.js
import { useParams } from "react-router-dom";

//
function Description() {
    const { id } = useParams();
    const person = people.find((person) => person.id == parseInt(id));

    return (
        <div>
            <h1>{person.name}</h1>
            <h3>{person.description}</h3>
        </div>
    );
}

export default Description;
