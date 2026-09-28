import AddToCard from "./addToCard"
import Batter from "./Batter"
import Run from "./Run"
// import { ProfileCard } from "./ProfileCard"


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
        <AddToCard></AddToCard>

        <Batter></Batter>
        <Run></Run>

            {/* <ProfileCard></ProfileCard>
            <button onClick={handleClick}>Click me</button>
            <button onClick={clickMe}>click me 2</button>
            <button onClick={()=>handleAddToCard(28)}>Bye now</button> */}
        </>
    )
}

export default App
