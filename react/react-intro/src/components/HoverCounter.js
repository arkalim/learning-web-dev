import withCounter from "./withCounter";
import React, { Component } from "react";

class HoverCounter extends Component {
    render() {
        // destructure the props passed from the HOC
        const { name, count, incrementCounter } = this.props;

        return (
            <div>
                <h2 onMouseOver={incrementCounter}>
                    {name} hovered {count} times
                </h2>
            </div>
        );
    }
}

// wrap the original component in the HOC while exporting
// increment by 1
export default withCounter(HoverCounter, 1);
