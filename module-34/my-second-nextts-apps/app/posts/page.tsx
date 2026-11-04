import React from 'react';
import Post from '../component/Post';
import { PostData } from '../Type';


const PostsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: PostData[] = await res.json();
    console.log(data);
    return (
        <div className='container mx-auto'>
            <h3>posts :{data.length} </h3>
            <div className='grid grid-cols-3 gap-3'>
                {
                    data.map((post: PostData) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default PostsPage;