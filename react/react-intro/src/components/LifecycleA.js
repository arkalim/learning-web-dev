import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Abdur",
        };
        console.log("LifecycleA constructor()");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps()");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount()");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate()");
    }

    changeState = () => {
        this.setState({
            name: "Tahseer",
        });
    };
    render() {
        console.log("LifecycleA render()");
        return (
            <div>
                <div>Lifecycle A</div>

                {/* When this button is clicked, the state will be changed */}
                <button onClick={this.changeState}>Change State</button>

                {/* LifecycleB as the child component of LifecycleA */}
                <LifecycleB />
            </div>
        );
    }
}

export default LifecycleA;
