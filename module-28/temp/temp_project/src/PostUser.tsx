import { use } from "react"
import PostUserCard from "./PostUserCard";

export default function PostUser({postDataPromise}){

    const postUsers = use(postDataPromise);
    console.log(postUsers);

    return (
        <div>
            <h3>post: {postUsers.length} </h3>
            {
                postUsers.map(postUser => <PostUserCard postUser = {postUser}></PostUserCard>)
            }
        </div>
    )
}