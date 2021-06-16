import React, { Component } from "react";

class RegComp extends Component {
    render() {
        console.log("Regular Component Render");
        return (
            <div>
                <h1>Regular Component | {this.props.name}</h1>
            </div>
        );
    }
}

export default RegComp;
