import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName: "Parent",
        };

        // since we are using 'this' inside greetParent() and greetParentFromChild(),
        // we need to bind both of these methods
        this.greetParent = this.greetParent.bind(this);
        this.greetParentFromChild = this.greetParentFromChild.bind(this);
    }

    // When the user clicks on the [Greet Parent] button in the ChildComponent,
    // this function will be executed
    // (child component calling parent component's method)
    greetParent() {
        alert(`Hello ${this.state.parentName}`);
    }

    // When the user clicks on the [Greet Parent from Child] button in the ChildComponent,
    // this function will be executed
    // (child component calling parent component's method and passing parameters)
    greetParentFromChild(childName) {
        alert(`Hello ${this.state.parentName}, from ${childName}.`);
    }

    render() {
        return (
            <div>
                {/* passing a reference to the greetParent() method 
                    as a prop called greetHandler to the child component */}
                <ChildComponent
                    greetHandler={this.greetParent}
                    greetFromChildHandler={this.greetParentFromChild}
                />
            </div>
        );
    }
}

export default ParentComponent;
