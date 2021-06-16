import React, { useState } from "react";

function Name() {
    // define the initial state (object)
    const initialState = {
        firstName: "",
        lastName: "",
    };

    // create a state hook
    const [name, setName] = useState(initialState);

    return (
        <div>
            <h3>
                {name.firstName} {name.lastName}
            </h3>
            <input
                type="text"
                value={name.firstName}
                placeholder="Enter your first name"
                // the setter function setName doesn't automatically merge the state
                onChange={(e) =>
                    // copy every property in the name object and modify the firstName
                    setName({ ...name, firstName: e.target.value })
                }
            ></input>
            <input
                type="text"
                value={name.lastName}
                placeholder="Enter your last name"
                // copy every property in the name object and modify the lastname
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            ></input>
        </div>
    );
}

export default Name;
