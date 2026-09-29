import './UserCard.css'
export default function UserCard({user}) {

    return (
        <div className="user">
            <p>ID: {user.id}</p>
            <p>User name: {user.username}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}