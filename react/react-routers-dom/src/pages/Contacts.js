import React from "react";
import { Link } from "react-router-dom";

// import the data
import { people } from "../components/people";

function Contacts() {
    // dynamic routing for each item in the contacts
    const peopleList = people.map((item) => (
        <h3 key={item.id}>
            <Link to={`/contacts/${item.id}`}>{item.name}</Link>
        </h3>
    ));
    return (
        <div className="Contacts">
            <h1>Contacts</h1>
            {peopleList}
        </div>
    );
}

export default Contacts;
