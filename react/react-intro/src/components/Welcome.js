// import react and the Component class from react
import React, { Component } from "react";

// class component
class Welcome extends Component {
    render() {
        // in class components, destructuring of props and states is done inside render()
        const { firstName, lastName, children } = this.props;
        return (
            <div>
                <h1>
                    GM {firstName} {lastName}
                </h1>
                {children}
            </div>
        );
    }
}

// export Welcome class
export default Welcome;
