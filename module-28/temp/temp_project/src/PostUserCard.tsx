import './UserCard.css'
export default function PostUserCard({postUser}){

    return (
        <div className="postCard">
            <h2>user id: {postUser.userId} </h2>
            <h2>{postUser.title} </h2>
            <h2>{postUser.body} </h2>
        </div>
    )
}