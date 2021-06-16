import React, { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Counter1() {
    const [count, setCount] = useState(0);

    // a custom hook to update the document title
    // based on the passed count value
    // the document tile is updated everytime
    // the count value is incremented
    useDocumentTitle(count);
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                Count: {count}
            </button>
        </div>
    );
}

export default Counter1;
