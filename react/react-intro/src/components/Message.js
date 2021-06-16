// import react and the Component class from react
import React, { Component } from 'react'

// class component
class Message extends Component {

    // constructor
    constructor() {
        // call the super() because this class extends Components class
        super()

        // this.state is reserved for creating states in a react app
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    // function to change the message state of the Class component
    changeMessage() {

        // setState() sets the values of the states passed in the object
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

// export Welcome class
export default Message