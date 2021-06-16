import React, { Component } from "react";

class RefsDemo extends Component {
    constructor(props) {
        super(props);

        // create a ref as a property of the component
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // print the inputRef after the component has been mounted
        console.log(this.inputRef);

        // once the component is mounted, focus on the inputRef (text input)
        // the cursor will be present for you to type in the input field
        this.inputRef.current.focus();
    }

    clickHandler = () => {
        // accessing the value of the DOM node referenced by inputRef
        alert(this.inputRef.current.value);
    };

    render() {
        return (
            <div>
                {/* Attach the ref to the element in the DOM */}
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;
