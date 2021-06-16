import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {/* passing a function as the child of UserConsumer 
                    which takes username as the argument and returns the JSX */}
                {(username) => {
                    return <div>Hello {username}.</div>;
                }}
            </UserConsumer>
        );
    }
}

export default ComponentF;
