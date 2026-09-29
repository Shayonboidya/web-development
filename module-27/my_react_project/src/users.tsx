import { use } from "react"

export default function Users({ userDataPromises }) {
    const msg = use(userDataPromises);
    console.log(msg);
    return (
        <div>
            <h2>user: </h2>
        </div>
    )
}