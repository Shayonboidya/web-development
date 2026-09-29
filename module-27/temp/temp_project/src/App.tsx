// import AddToCard from "./addToCard"
// import Batter from "./Batter"
// import Run from "./Run"
import { Suspense } from "react"
import Users from "./Users";

// import { ProfileCard } from "./ProfileCard"

const userDataPromices = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
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
            <Suspense fallback={<p>loading...</p>}>
                <Users userDataPromices={userDataPromices()}></Users>
            </Suspense>

        
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
