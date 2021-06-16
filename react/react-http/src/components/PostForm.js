import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            title: "",
            body: "",
        };
    }

    changeHandler = (event) => {
        this.setState({
            // based on which form field changed, update the state
            [event.target.name]: [event.target.value],
        });
    };

    submitHandler = (event) => {
        // prevent the refreshing behavior
        event.preventDefault();

        // destructure the props
        const { url } = this.props;

        // make a post request on the url with 
        // the new data (state of this component)
        axios
            .post(url, this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        // destructure the state
        const { userId, title, body } = this.state;

        return (
            <div>
                {/* Create a simple form */}
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            placeholder="User ID"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Title"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            placeholder="Body"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
