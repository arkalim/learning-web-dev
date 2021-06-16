import React, { useEffect, useState } from "react";

function ConditionalTitleCounter() {
    // define the states and their setters
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // By default useEffect() executes after any of the states change
    // To run useEffect only when some of the states change, we can
    // pass a list of props or states as the second argument
    // Now, this hook will only execute when any of the passed list of
    // props or states change
    useEffect(() => {
        console.log("Updating the title");
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button onClick={() => setCount((count) => count + 1)}>
                Click
            </button>
        </div>
    );
}

export default ConditionalTitleCounter;
