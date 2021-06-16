import React, { Component } from "react";

class ClassClick extends Component {
    // click handler is a class method
    clickHandler() {
        console.log("Button 2 Pressed");
    }

    render() {
        return (
            <div>
                {/* The function has to be passed inside {} in JSX */}
                <button onClick={() => console.log("Button 1 Pressed")}>Button 1</button>

                {/* passing a local function to the event handler*/}
                <button onClick={this.clickHandler}>Button 2</button>
            </div>
        );
    }
}

export default ClassClick;
