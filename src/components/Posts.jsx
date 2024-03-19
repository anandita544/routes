

import { useState, useEffect } from 'react';
const style1 = {
    backgroundColor: "rgb(107,137,179)",
    color: "white",
    fontSize: "40px"
}

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async function get() {
            try {
                const body = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await body.json();
                setPosts(data);

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])


    return (
        <div style={style1}>
            {posts.map(post => (<p>{post.title}</p>))}
        </div>

    )
}


export default Posts;