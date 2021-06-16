import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        // accessing Input component's focusInput() using ref
        this.componentRef.current.focusInput();
    };

    render() {
        return (
            <div>
                {/* Adding a ref to the Input component in the parent component */}
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default FocusInput;
