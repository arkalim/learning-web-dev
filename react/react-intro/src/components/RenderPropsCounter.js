import React, { Component } from "react";

// this components implements the counter logic to be used by other components
class RenderPropsCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    // render the children of this component
    // the children of this component is an arrow function
    // that takes the count and inrementCount and renders the
    // original component and passes the count and inrementCount to it
    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

export default RenderPropsCounter;
