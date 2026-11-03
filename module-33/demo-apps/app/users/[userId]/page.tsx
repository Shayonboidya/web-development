import Post from '@/app/component/post';

interface User {
    id: number;
    username: string;
    address: { street: string };
}

const UserIdPage = async ({ params }: { params: Promise<{ userId: string }> }) => {
    const { userId } = await params;
    console.log(userId);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await res.json();

    const card = data.find(user => user.id === parseInt(userId));

    return (
        <div>
            <h3>this is user id page</h3>
            {card ? <Post user={card} /> : <p>User not found.</p>}


        </div>
    );
};

export default UserIdPage;