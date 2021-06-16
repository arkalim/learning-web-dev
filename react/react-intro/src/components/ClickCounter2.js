import React, { Component } from "react";

class ClickCounter2 extends Component {
    render() {
        const { name, count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount}>
                    {name} clicked {count} times
                </button>
            </div>
        );
    }
}

export default ClickCounter2;
