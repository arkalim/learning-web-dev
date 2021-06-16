import { useState } from "react";

// default parameter of 0
function useCounter(initialCount = 0) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((count) => count + 1);
    };

    const decrement = () => {
        setCount((count) => count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    // return the count and the related methods
    // in an array
    return [count, increment, decrement, reset];
}

export default useCounter;
