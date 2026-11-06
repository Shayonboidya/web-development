import React from 'react';

const postPromice = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();

}

const PostsPage = async() => {
    const posts = await postPromice();
    // console.log(posts);
    return (
        <div>
            <h3>hollo posts : {posts.length} </h3>
        </div>
    );
};

export default PostsPage;