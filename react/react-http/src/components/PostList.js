import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            errorMsg: "",
        };
    }

    // this method executes only once after the component is mounted
    componentDidMount() {
        // destructure the props
        const { url } = this.props;

        // the get() method of axios returns a promise
        // which can be used to get the data or log the error
        axios
            .get(url)
            .then((response) => {
                this.setState({
                    posts: response.data,
                });
            })
            .catch((error) => {
                this.setState({
                    errorMsg: "Error retreiving data",
                });
                console.log(error);
            });
    }

    render() {
        // destructure the posts
        const { posts, errorMsg } = this.state;

        // if atleast 1 item is present in the posts array,
        // create a list using map() method else null
        const postList = posts.length
            ? posts.map((post) => <div key={post.id}>{post.title}</div>)
            : null;

        // render the posts
        return (
            <div>
                <h2>List of Posts</h2>
                {postList}
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        );
    }
}

export default PostList;
