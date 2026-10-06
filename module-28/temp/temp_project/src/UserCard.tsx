import type { UserCardType } from "./Type";

export default function UserCard({ user }) {


    return (

        <div className="user">
            <h2>id: {user.id} </h2>
            <h2>userName: {user.userName} </h2>
            <h2>name: {user.name} </h2>
            <h2>Email: {user.email}</h2>
        </div>

    )
}