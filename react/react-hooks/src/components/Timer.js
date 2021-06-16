import React, { useState, useEffect, useRef } from "react";

function Timer() {
    const [timer, setTimer] = useState(0);

    // create a ref to access the interval object
    // whose scope is local to the useEffect()
    // We use ref to clear it in the onClick eventHandler
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <h3>Timer: {timer}</h3>
            <button onClick={() => clearInterval(intervalRef.current)}>
                Stop Timer
            </button>
        </div>
    );
}

export default Timer;
