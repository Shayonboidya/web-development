import { IFood } from '@/app/Type';
import React from 'react';

const FoodDetailsPage = async ({ params }: { params: { foodId: string } }) => {
    const { foodId } = await params;
    // console.log(foodId);

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods`);
    const data = await res.json();
    const foods: IFood[] = data.data;
    // console.log(foods);
    const food = foods.find(f => f.id === foodId);
    // console.log(food);
    return (
        <div>
            <h3>{food?.dish_name}</h3>
            <h3>{food?.category}</h3>
            <h3>{food?.origin_and_popularity}</h3>
            <h3>{food?.price}</h3>
            <h3>{food?.rating}</h3>
        </div>
    );
};

export default FoodDetailsPage;