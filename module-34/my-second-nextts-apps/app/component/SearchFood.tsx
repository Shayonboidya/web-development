'use client'

import React, { use, useEffect, useState } from 'react';
import { IFood } from '../Type';

const SearchFood = ({ foodPromice }: { foodPromice: Promise<IFood[]> }) => {
    // const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods`);
    // const data = await res.json();
    // const foods: IFood[] = data.data;
    // // console.log(foods);
    const foods: IFood[] = use(foodPromice);


    // another ways of data loding using useEffect

    // const [foods, setFoods] = useState([]);

    // useEffect(() => {
    //     fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods")
    //         .then(res => res.json())
    //         .then(data => setFoods(data.data))
    // },[searchText])


    return (
        <div>
            <h3>search food : {foods.length} </h3>
        </div>
    );
};

export default SearchFood;