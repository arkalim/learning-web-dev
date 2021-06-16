import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello",
        };

        // binding the event handler
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: "Goodbye",
        });
    }

    clickHandler_ = () => {
        this.setState({
            message: "Goodbye",
        });
    };

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 'this' is undefined in event handlers so, event binding is necessary */}

                {/* Approach 1: Binding 'this' in the render() method
                    Every update to the state causes binding of eventhander (inefficient) */}
                <button onClick={this.clickHandler.bind(this)}>Approach 1</button>

                {/* Approach 2: Use an arrow function 
                    This approach allows passing parameters to the clickHandler */}
                <button onClick={() => this.clickHandler()}>Approach 2</button>

                {/* Approach 3: Binding 'this' in the constructor
                    Recommended approach: binding happens only once (efficient) */}
                <button onClick={this.clickHandler}>Approach 3</button>

                {/* Approach 4: Define clickHandler as an arrow function 
                    Recommended but experimental */}
                <button onClick={this.clickHandler_}>Approach 4</button>
            </div>
        );
    }
}

export default EventBind;
