import React, { useState } from "react";
import MousePosition from "./MousePosition";

function ToggleMousePosition() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button
                onClick={() => {
                    setDisplay(!display);
                }}
            >
                Toggle Display
            </button>

            {/* render the MousePosition only when display is true */}
            {/* when display is false, <MousePosition> will be unmounted */}
            {display && <MousePosition />}
        </div>
    );
}

export default ToggleMousePosition;
