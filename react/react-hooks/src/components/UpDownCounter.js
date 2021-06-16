import React, { useReducer } from "react";

// define the initial state and the reducer function
const initialState = 0;

// reducer function takes the current state and action
// and returns the new state depending upon the action
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function UpDownCounter() {
    // useReducer accepts the reducer function and the initial state
    // and returns the current state (count) and a dispatch method
    // which when called with the action, runs the reducer function
    // and updates the state
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
}

export default UpDownCounter;
