import React, { useEffect, useRef } from "react";

function FocusInput() {
    // create a ref with null value initially
    const inputRef = useRef(null);

    // focus the input element once the component is rendered
    useEffect(() => {
        // focus the input element
        // the ref element is accessed by the current property
        inputRef.current.focus();
    }, []);

    return (
        <div>
            {/* attach the ref to the DOM element using 
                the reserved attribute 'ref' */}
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default FocusInput;
