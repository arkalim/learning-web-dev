import React, { Component } from "react";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
    render() {
        // Render Component F inside Component E
        return (
            <div>
                <ComponentF />
            </div>
        );
    }
}

export default ComponentE;
