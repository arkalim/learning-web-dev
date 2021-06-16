import React from "react";

function Button({ onClick, children }) {
    console.log(`Rendering button - ${children}`);
    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    );
}

// React.memo to prevent unnecessry re-rendering of functional components
export default React.memo(Button);
