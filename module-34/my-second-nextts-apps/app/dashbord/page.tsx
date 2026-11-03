import React from 'react';
import Counter from '../component/Counter';

const DashbordPage = () => {
    console.log("this is dashbord");
    return (
        <div className='container mx-auto'>
            <Counter></Counter>
            <ul>
                <li>item-1</li>
                <li>item-2</li>
                <li>item-3</li>
                <li>item-4</li>
            </ul>
        </div>
    );
};

export default DashbordPage;