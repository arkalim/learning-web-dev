import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Abdur",
        };
    }

    // once the parent component is mounted,
    // set the name prop to the previous value (no change)
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Abdur",
            });
        }, 2000);
    }

    render() {
        console.log("------ Parent Component Render -------");
        return (
            <div>
                <h1>Parent Component</h1>

                {/* Include the MemoComp in the JSX of the 
                    Parent component by passing the the name as the prop*/}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        );
    }
}

export default ParentComp;
