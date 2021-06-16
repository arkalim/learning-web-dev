import React, { Component } from "react";

class SetState extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    // function to increment the count by 1
    increment() {
        // Whenever we have to update the state based on a previous state,
        // pass an arrow function to the setState() instead of an object
        this.setState(
            (prevState) => ({
                count: prevState.count + 1,
            }),

            // setState() executes asynchronously
            // so if we want to execute some code after the setting the state,
            // pass them in a callback function
            () => {
                console.log("Value of count in the callback func: ", this.state.count);
            }
        );

        console.log("Value of count after the setting its state: ", this.state.count);
    }

    // function to increment the count by 5
    // React groups all the setState methods and
    // executes them in parallel to improve performance
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>Count Value: {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment 1</button>
                <button onClick={() => this.incrementFive()}>Increment 5</button>
            </div>
        );
    }
}

export default SetState;
