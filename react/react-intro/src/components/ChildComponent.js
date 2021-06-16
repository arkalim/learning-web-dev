import React from "react";

function ChildComponent(props) {
    // The childcomponent will render the button in the Parent Component
    return (
        <div>
            {/* The child component will receive the greetHandler 
                as a prop and run it when the button is pressed */}
            <button onClick={props.greetHandler}>Greet Parent</button>

            {/* The child component will receive the greetFromChildHandler 
                as a prop and run it with the parameter when the button is pressed */}
            <button onClick={() => props.greetFromChildHandler("Abdur")}>
                Greet Parent from Child
            </button>
        </div>
    );
}

export default ChildComponent;
