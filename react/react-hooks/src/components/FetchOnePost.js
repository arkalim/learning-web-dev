import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchOnePost() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    // fetch the data everytime the id changes
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setPost(response.data);
            });
    }, [id]);

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => {
                    setId(e.target.value);
                }}
            ></input>
            <div>{post.title}</div>
        </div>
    );
}

export default FetchOnePost;
