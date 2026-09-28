import { useState } from "react"

export default function Run(){
    const [run, setRun] = useState(0);
    const runs = () => {
        setRun(run + 6);
    }
    const BuyNow = () => {
        
    }
    return (

        <>
            <h2>Total run : {run} </h2>
            <button onClick={runs}>click me for update run</button>
            <button onClick={BuyNow}>Buy Now</button>
        </>
    )
}