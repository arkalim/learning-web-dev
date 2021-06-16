import React from "react";

function MemoComp({ name }) {
    console.log("Memo Component Render");
    return (
        <div>
            <h1>Memo Component | {name}</h1>
        </div>
    );
}

// Make this a Memo Component
export default React.memo(MemoComp);
