import React, { useContext } from "react";

// import contexts
import { FirstName, LastName } from "./ComponentC";

function ComponentF() {
    // consume contexts
    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);

    return (
        <div>
            Hello, {firstName} {lastName}!
        </div>
    );
}

export default ComponentF;
