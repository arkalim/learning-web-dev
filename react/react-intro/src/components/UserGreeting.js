import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    render() {
        // conditional rendering using if-else
        if (this.state.isLoggedIn) {
            return <div>Hello Abdur</div>;
        } else {
            return <div>Hello Guest</div>;
        }

        // conditional rendering using element variable
        let message;
        if (this.state.isLoggedIn) {
            message = "Hello Abdur";
        } else {
            message = "Hello Guest";
        }
        return `<div>${message}</div>`;

        // conditional rendering using ternary operator inside JSX
        // recommended: keeps the code simple and readable
        return this.state.isLoggedIn ? <div>Hello Abdur</div> : <div>Hello Guest</div>;

        // conditional rendering using shortcircuit operator
        // it's just the AND operator (if the condition is true,
        // Hello Abdur will be displayed, else nothing will be displayed)
        return this.state.isLoggedIn && <div>Hello Abdur</div>;
    }
}

export default UserGreeting;
