import React from "react";

function FunctionClick() {
    // JS allows us to create functions inside other functions
    function clickHandler() {
        console.log("Button 2 Pressed");
    }

    return (
        <div>
            {/* The function has to be passed inside {} in JSX */}
            <button onClick={() => console.log("Button 1 Pressed")}>Button 1</button>

            {/* passing a local function to the event handler*/}
            <button onClick={clickHandler}>Button 2</button>
        </div>
    );
}

export default FunctionClick;
