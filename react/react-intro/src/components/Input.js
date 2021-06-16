import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);

        // create a ref as a property of the component
        this.inputRef = React.createRef();
    }

    // this function will be called by the parent component using refs
    focusInput() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                {/* Attach the ref to the element in the DOM */}
                <input type="text" ref={this.inputRef}></input>
            </div>
        );
    }
}

export default Input;
