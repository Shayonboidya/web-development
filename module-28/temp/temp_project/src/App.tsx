// import AddToCard from "./addToCard"
// import Batter from "./Batter"
// import Run from "./Run"

import { Suspense } from "react";

import Users from "./Users";
import PostUser from "./PostUser";
// import Student from "./Student";

// import { ProfileCard } from "./ProfileCard"

async function userDataPromics (){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
}


const postDataPromise = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}


function App() {
    // function handleClick() {
    //     alert("Hello world");
    // }
    // const clickMe = () => {
    //     alert("click me")
    // }
    // const handleAddToCard = (id:number) => {
    //     alert("buing"+ id)
    // }
    return (
        <>
            <Suspense fallback={<p>loading.....</p>}>
                <Users userDataPromics={userDataPromics()}></Users>
            </Suspense>

            <Suspense fallback = {<p>loading  Post data.....</p>}>
                <PostUser postDataPromise = {postDataPromise()}></PostUser>
            </Suspense>
            

{/* 
            <Student name="Shayon" department="CSE" university="PSTU"></Student>
            <Student name="Nitu" department="CSE" status={true}></Student> */}
            
        
            {/* <AddToCard></AddToCard>

        <Batter></Batter>
        <Run></Run> */}

            {/* <ProfileCard></ProfileCard>
            <button onClick={handleClick}>Click me</button>
            <button onClick={clickMe}>click me 2</button>
            <button onClick={()=>handleAddToCard(28)}>Bye now</button> */}
        </>
    )
}

export default App
