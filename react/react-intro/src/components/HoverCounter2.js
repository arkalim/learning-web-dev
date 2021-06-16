import React, { Component } from "react";

export class HoverCounter2 extends Component {
    render() {
        const { name, count, incrementCount } = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>
                    {name} hovered {count} times
                </h2>
            </div>
        );
    }
}

export default HoverCounter2;
