import React from 'react';

const UserDetailPage = async ({ params }: { params: Promise<{ userId: string }> }) => {
    const {userId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json();
    return (
        <div>
            {/* <h3>hello</h3> */}
            <h2>username: {user.username} </h2>
            <h2>name: {user.name} </h2>
            <h2>Email: {user.email} </h2>
        </div>
    );
};

export default UserDetailPage;