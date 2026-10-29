import React from 'react';
import Link from 'next/link';

interface postType {
    id: number,
    title: string,
    author: string,
    category: string,
    image: string,
    description: string,
    date: string,
    readTime: string
}

const Post = ({ post }: { post: postType }) => {
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
                    <Link href={`/blogs/${post.id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;