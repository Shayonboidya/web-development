import { useState } from "react";
import type { StudentType } from "./Type";
import "./UserCard.css"


// export default function Student({name, department, university, status}:StudentType){
export default function Student({name, department, university}:StudentType){
    const handelClick = () =>{
        alert("hello")
    }

    const [count , setCount] = useState(0);
    // const increaseCount = () =>{
    //     setCount(count + 1);
    // }
    const [status, setStatus] = useState(false);
    const toggleStatus = () => {
        setStatus(status => !status);
    }

    return(
        <div className="user">
            <h2>Name: {name} </h2>
            <h2>Department: {department} </h2>
            <h2>University: {university} </h2>
            <h2>status: {status ? "Active Student" : "Not a student"}</h2>
            <button onClick={toggleStatus}>toggle status</button>

            <button onClick={handelClick}>on click</button>
            <h2>count : {count}</h2>
            {/* <button onClick={increaseCount}>increase</button> */}
            <button onClick={() => setCount(count + 1)}>increase</button>
        </div>
    )
}