import React from "react";

// Forward the ref from the parent component to the
// <input> of child component (here, child component is functional component)
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
});

export default FRInput;
