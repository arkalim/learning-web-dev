import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comments: "",
            topic: "react",
        };
    }

    // Whenever the username is changed, call the handler
    // to set the new state of the Form component
    // When we assign a handler to the onChange event,
    // the event is automatically passed to the handler
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    };

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value,
        });
    };

    handleSubmit = (event) => {
        alert(
            `Username: ${this.state.username} Comments: ${this.state.comments} Topic: ${this.state.topic}`
        );

        // prevent the default behaviour of refreshing the page when the form is submitted
        event.preventDefault();
    };

    render() {
        // destructuring the component state
        const { username, comments, topic } = this.state;
        return (
            // When the submit button is pressed, the form is submitted
            // Attach a handler to the submission event of the form
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
