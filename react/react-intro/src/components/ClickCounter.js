import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
    render() {
        // destructure the props passed from the HOC
        const { name, count, incrementCounter } = this.props;

        return (
            <div>
                <button onClick={incrementCounter}>
                    {name} clicked {count} times
                </button>
            </div>
        );
    }
}

// wrap the original component in the HOC while exporting
// increment by 2
export default withCounter(ClickCounter, 2);
