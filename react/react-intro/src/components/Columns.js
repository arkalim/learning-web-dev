import React from "react";

// this component renders the columns in the table
function Columns() {
    let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
    let fruitsList = fruits.map((fruit, index) => (
        <React.Fragment key={index}>
            <td>{fruit}</td>
        </React.Fragment>
    ));
    return (
        // return the columns with no <div> between <tr> and <td>
        // shorthand for React Fragment
        <>{fruitsList}</>
    );
}

export default Columns;
