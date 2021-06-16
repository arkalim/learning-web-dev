import React from "react";

function Title() {
    console.log("Rendering Title");
    return (
        <div>
            <h1>useCallback Hook</h1>
        </div>
    );
}

// React.memo to prevent unnecessry re-rendering of functional components
export default React.memo(Title);
