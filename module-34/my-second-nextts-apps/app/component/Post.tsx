import React from 'react';
interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Post = ({post}:{post:PostData}) => {
    return (
        <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Post;