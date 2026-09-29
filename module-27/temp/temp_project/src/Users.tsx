import { use } from "react";
import UserCard from "./userCard";

export default function Users({ userDataPromices }) {

    const users = use(userDataPromices);

    console.log(users);

    return (
        <div>
            <h2>User: {users.length}</h2>
            {
                users.map(user => <UserCard user={user}></UserCard>)
            }

        </div>
    );
}


/**
 * 1. Suspense fallback
 * 2. crate a promice function to loead data
 * 3.send the promise to the component to load data
 */







/**
 * 1. data source || jeson
 * jeson.stringify()
 * jeson.parse()
 * 
 */
// // callback function
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })


// // async await
// async function loadData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     return data;
// }

// const loadData2 = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     return data;
// }
