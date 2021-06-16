import React, { Component } from "react";

// Error Boundary component to handle errors
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    // For this component to become an error boundary,
    // we need to define any of the two error handling lifecycle methods

    // this method will return the new state of the component in case of an error
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    // this method is used to log the error
    // we don't need to implement this method as React
    // logs all the errors to the console by default
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        // since the state hasError is changing in case of an error,
        // it can be used to create a fallback UI in the render method
        if (this.state.hasError) {
            return <div>Something went wrong!</div>;
        }
        // components required to be rendered
        return this.props.children;
    }
}

export default ErrorBoundary;
