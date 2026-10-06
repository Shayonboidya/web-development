import { use } from "react"
import CommentUserCard from "./CommentUserCard";

export default function CommentsUser({commentUserDataPromise}){
    const commnetUsers = use(commentUserDataPromise);
    console.log(commnetUsers);

    return (
        <div>
            <h2> length of commnet User array: {CommentsUser.length}</h2>

            {
                commnetUsers.map(commentUser => <CommentUserCard commentUser = {commentUser}></CommentUserCard> )
            }

        </div>
    )
}