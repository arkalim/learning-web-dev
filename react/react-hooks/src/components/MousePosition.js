import React, { useEffect, useState } from "react";

function MousePosition() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // An empty array passed as second argument to useEffect() tells
    // it that the render doesn't depend on any prop or state
    // So, the the function will only be executed once after the first render
    // mimicking componentDidMount() from class components
    useEffect(() => {
        // we need to add the event listener only once
        window.addEventListener("mousemove", logMousePosition);

        // when the component unmounts, the returned fuction will be executed
        // mimicking componentWillUnmount() from class components
        return () => {
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);

    // everytime the mouse position changes, this will be called
    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    return (
        <div>
            <h3>
                Mouse Coordinate: ({x},{y})
            </h3>
        </div>
    );
}

export default MousePosition;
