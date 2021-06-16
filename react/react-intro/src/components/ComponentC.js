import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
    render() {
        // Render Component E inside Component C
        return (
            <div>
                <ComponentE />
            </div>
        );
    }
}

export default ComponentC;
