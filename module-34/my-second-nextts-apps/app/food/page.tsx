import React, { Suspense } from 'react';
import SearchFood from '../component/SearchFood';

const FoodPage = () => {
    const foodPromice = async () => {
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods`);
        const data = await res.json();
        return data.data;
    }
    return (
        <div>
            <Suspense fallback={<p>loading....</p>}>
                <SearchFood foodPromice={foodPromice()}></SearchFood>

            </Suspense>
        </div>
    );
};

export default FoodPage;