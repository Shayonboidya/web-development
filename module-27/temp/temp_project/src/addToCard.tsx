import { useState } from "react";

export default function AddToCard(){
    const [count, setCount] = useState(0);
    const addTocard = () =>{
        setCount(count + 1);
    }
    return (
        <>
            <h2>Shopping now</h2>
            <p>item in the card : {count} </p>
            <button onClick={addTocard} >add to card</button>
        </>
    )
}