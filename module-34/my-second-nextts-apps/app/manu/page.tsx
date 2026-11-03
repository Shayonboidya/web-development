import React from 'react';
import FoodCard from '../component/FoodCard';

interface IFood {
    id: string;
    dish_name: string;
    rating: number;
    price: number;
    image_link: string;
}

const ManuPage = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods");
    const data = await res.json();
    const foods = data.data;
    console.log(foods);
    return (
        <div className='container mx-auto'>
            <div>manu card </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    foods.map((food: IFood) => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default ManuPage;