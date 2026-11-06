import React from 'react';

/**
 * 1.GET
 * 2.POST
 * 3.UPDATE: Put, Patch
 * 4.DELETE
 * 
 */


const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

const getPost1 = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    } catch (error) {
        throw new Error("Data is not found");
    }
}


const getPost2 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error("Data is not found");
    }

    return res.json();
}
const postPromice = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // return res.json();

}

const PostsPage = async () => {
    // const posts = await postPromice();
    // const posts = await getPost();
    // const posts = await getPost();
    // const posts = await getPost1();
    const posts = await getPost2();
    // console.log(posts);
    return (
        <div>
            <h3>hollo posts : {posts.length} </h3>
        </div>
    );
};

export default PostsPage;