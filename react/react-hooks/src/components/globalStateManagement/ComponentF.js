import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentF() {
    // use context to access the dispatch function of the global counter
    const countContext = useContext(CountContext);

    return (
        <div>
            Component F
            <button onClick={() => countContext.dispatch("increment")}>
                Increment
            </button>
            <button onClick={() => countContext.dispatch("decrement")}>
                Decrement
            </button>
            <button onClick={() => countContext.dispatch("reset")}>
                Reset
            </button>
        </div>
    );
}

export default ComponentF;
