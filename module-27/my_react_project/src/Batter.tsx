import { useState } from "react"

export default function Batter(){
    const [run, setRun] = useState(0);
    const updataRun = () =>{
        setRun(run +1);
    }
    return (

        <div>
            <h2>run is :{run} </h2>
            <button onClick={updataRun}>update run</button>
        </div>
    )
}