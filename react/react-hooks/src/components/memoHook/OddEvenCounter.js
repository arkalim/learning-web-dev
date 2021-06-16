import React, { useMemo, useState } from "react";

function OddEvenCounter() {
    // create 2 count states
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementCount1 = () => {
        setCount1((count1) => count1 + 1);
    };

    const incrementCount2 = () => {
        setCount2((count2) => count2 + 1);
    };

    // function to check if the counter 1 is even or odd
    // useMemo only calculates the new return value of the passed function
    // when the passed list of values change. If they don't change, React
    // uses the cached return value of the function and doesn't recompute
    // here, this function only needs to recompute when count1 changes
    const isEven = useMemo(() => {
        // slowing the function down
        for (let i = 0; i < 10 ** 9; i++);

        return count1 % 2 === 0 ? "Even" : "Odd";
    }, [count1]);

    return (
        <div>
            <button onClick={incrementCount1}>
                Count: {count1} | {isEven}
            </button>
            <button onClick={incrementCount2}>Count: {count2}</button>
        </div>
    );
}

export default OddEvenCounter;
