// import react
import React from "react";

// create an function Greet(props)
const Greet = (props) => {
    // destructuring props
    const { firstName, lastName, children } = props;
    return (
        <div>
            <h1>
                Hello {firstName} {lastName}
            </h1>
            {children}
        </div>
    );
};

// export the Greet function
export default Greet;
