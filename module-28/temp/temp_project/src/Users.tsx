import { use } from "react"
import UserCard from "./userCard";

export default function Users({userDataPromics}){
    const users = use(userDataPromics);
    console.log(users);

    return(
        <div>
            <h2>User : {users.length} </h2>   
            {
                users.map(user => <UserCard user={user} ></UserCard> )
            }     

        </div>
    )
}