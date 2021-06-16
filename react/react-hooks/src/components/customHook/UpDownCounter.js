import React from "react";
import useCounter from "../../hooks/useCounter";

function UpDownCounter() {
    // using the custom counter hook
    const [count, increment, decrement, reset] = useCounter(5);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default UpDownCounter;
