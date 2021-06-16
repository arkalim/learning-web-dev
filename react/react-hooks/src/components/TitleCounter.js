import React, { useEffect, useState } from "react";

function TitleCounter() {
    const [count, setCount] = useState(0);

    // useEffect is called inside the component so that
    // we can easily access the state and props 
    // useEffect takes in a function as a parameter which
    //  will be executed after every render of the component
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                Click
            </button>
        </div>
    );
}

export default TitleCounter;
