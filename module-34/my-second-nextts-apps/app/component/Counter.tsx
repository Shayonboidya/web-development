"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log("counter component");
    const handelClick = ()=>{
        console.log("counter incress");
        setCount(count + 1);
    }
    return (
        <div>
            <h3 className='text-2xl'>counter : {count}</h3>
            <button className='btn'
            onClick={handelClick}
            >
                incress!
            </button>
        </div>
    );
};

export default Counter;