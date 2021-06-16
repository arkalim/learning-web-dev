import React, { PureComponent } from "react";

// pure component class extends PureComponent class of React
class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Render");
        return (
            <div>
                <h1>Pure Component | {this.props.name}</h1>
            </div>
        );
    }
}

export default PureComp;
