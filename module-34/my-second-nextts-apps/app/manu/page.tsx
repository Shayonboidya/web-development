import React from 'react';

const ManuPage = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods");
    const data = await res.json();
    console.log(data.data);
    return (
        <div>
            <div>manu card:{data.data.length} </div>
        </div>
    );
};

export default ManuPage;