// import useState hook
import React, { useState } from "react";

function Counter() {
    // useState takes the initial value of the state property (count) which is 0
    // and returns the current value of the state property (count) and a method that
    // when called with a value as an argument will assign the state property to that value
    const [count, setCount] = useState(0);

    return (
        <div>
            Count: {count}
            {/* When the reset button is clicked, set 0 as the new state property 
                use arrow func since we are making a function call */}
            <button onClick={() => setCount(0)}>Reset</button>
            {/* Since incrementing and decrementing the state depends on the current state, 
                pass the current state and use that to update the next state */}
            <button onClick={() => setCount((Count) => Count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((Count) => Count - 1)}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;
