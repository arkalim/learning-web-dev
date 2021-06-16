import React from "react";

// HOC (accepts the original component and returns the new component)
// Here, the UpdatedComponent is the HOC which adds a state.count and
// a incrementCounter() to the original component (WrappedComponent).
// incrementBy is also passed a parameter
const withCounter = (WrappedComponent, incrementBy) => {
    // create a new component
    class WithCounter extends React.Component {
        // implement the state.count in the HOC
        constructor(props) {
            super(props);

            this.state = {
                count: 0,
            };
        }

        // implement the incrementCounter() in the HOC
        incrementCounter = () => {
            this.setState((prevState) => ({
                count: prevState.count + incrementBy,
            }));
        };

        render() {
            // render the original component and pass down the state.count
            // and incrementCounter() as props to the original component
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCounter={this.incrementCounter}
                    // pass down all the incoming props from the
                    // parent component to the original component
                    // because the props meant to be passed to the
                    // original component will be passed to the HOC
                    {...this.props}
                />
            );
        }
    }

    // return the new component
    return WithCounter;
};

// export the HOC to use it
export default withCounter;
