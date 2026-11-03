import Post from '../component/post';

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: number,
        geo: {
            lat: number,
            lng: number
        }
    }
}

const USersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await res.json();
    return (
        <div className='container mx-auto'>
            <h1>user page</h1>
            <div className='grid grid-cols-3 gap-4'>

                {
                    data.map(user => <Post key={user.id} user={user} />)
                }
            </div>

        </div>
    );
};

export default USersPage;