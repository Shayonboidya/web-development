import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

interface User {
    id: number;
    name: string;
}

export const metadata: Metadata = {
    title: 'users',
    description: '...',
}
const UserPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();
    return (
        <div>
            <h3>user : {users.length} </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    users.map(user =>
                        <div key={user.id} className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/users/${user.id}`}>
                                        <button className="btn btn-primary">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UserPage;