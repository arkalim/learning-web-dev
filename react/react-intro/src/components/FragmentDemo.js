import React from "react";

function FragmentDemo() {
    return (
        // Using React.Fragment prevents the <div> tag to appear in the DOM
        // between App component and the children elements of FragmentDemo
        // Shorthand for React.Fragment : <></>
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the fragment demo component.</p>
        </React.Fragment>
    );
}

export default FragmentDemo;
