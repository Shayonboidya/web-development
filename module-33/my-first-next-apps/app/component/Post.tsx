import React from 'react';

interface postType {
    id: number,
    title: string,
    author: string,
    category: string,
    image: string,
    description: string,
    date: string,
    readTime: string
}cd modu

const Post = ({ post }: { post: postType}) => {
    return (
        <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
                <img
                    src={post.image}
                    alt="Shoes"
                    width={500}
                    height={500}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Post;