import type { CommentsUserType } from "./Type";

export default function CommentUserCard({commentUser}:CommentsUserType){

    return (
        <div className="commentUser">
            <p>Post ID: {commentUser.postId} </p>
            <p>name: {commentUser.name} </p>
            <p>email : {commentUser.email} </p>
            <p>Body : {commentUser.body} </p>
        </div>
    )
}