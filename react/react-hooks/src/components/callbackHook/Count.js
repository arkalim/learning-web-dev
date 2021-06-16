import React from "react";

function Count({ text, count }) {
    console.log(`Rendering - ${text}`);
    return (
        <div>
            {text}: {count}
        </div>
    );
}

// React.memo to prevent unnecessry re-rendering of functional components
export default React.memo(Count);
