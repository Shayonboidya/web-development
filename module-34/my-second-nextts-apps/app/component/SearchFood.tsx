import React from 'react';
import { IFood } from '../Type';

const SearchFood = async () => {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods`);
    const data = await res.json();
    const foods: IFood[] = data.data;
    // console.log(foods);
    return (
        <div>
            <h3>search food : {foods.length} </h3>
        </div>
    );
};

export default SearchFood;