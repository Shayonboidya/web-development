import { useState } from "react"

export default function Batter(){
    const [runs, setRuns] = useState(0);
    const handleAddFour =() =>{
        setRuns(runs + 4);
    }
    const handleAddSix =() =>{
        setRuns(runs + 6);
    }
    const handleAddTwo =() =>{
        setRuns(runs + 2);
    }
    const handleAddSOne =() =>{
        setRuns(runs + 1);
    }
    return(

        <>
            <p>---------------------------------------</p>
            <h4>Run : {runs} </h4>
            <button onClick={handleAddSix}>add 6</button>
            <button onClick={handleAddFour}>add 4</button>
            <button onClick={handleAddTwo}>add 2</button>
            <button onClick={handleAddSOne}>add 1</button>

        </>
    )
}