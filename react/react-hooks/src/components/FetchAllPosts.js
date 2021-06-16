import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchAllPosts() {
    const [posts, setPosts] = useState([]);
    const postList = posts.map((post) => <li key={post.id}>{post.title}</li>);

    // fetch the data only once after the component is rendered
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            });
    }, []);

    return <div>{postList}</div>;
}

export default FetchAllPosts;
