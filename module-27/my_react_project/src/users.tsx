import { use } from "react"

export default function Users({ userDataPromises }: { userDataPromises: Promise<any> }) {
    const msg = use(userDataPromises);
    console.log(msg);
    return (
        <div>
            <h2>user: {msg}</h2>
        </div>
    )
}