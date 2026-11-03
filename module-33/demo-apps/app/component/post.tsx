import Link from 'next/link';
import React from 'react';

const Post = ({ user }: { user: {id:number; username: string; address: { street: string } } }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    width={500}
                    height={600}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.username}</h2>
                <p>{user.address.street}</p>
                <div className="card-actions justify-end">
                    <Link href={`/users/${user.id}`}>
                        <button className="btn btn-primary">Learn more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;