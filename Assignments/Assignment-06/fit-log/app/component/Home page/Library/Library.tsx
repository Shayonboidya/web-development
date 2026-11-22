import { IWork } from '@/app/Type';
import React from 'react';
import WorkCardSmall from './WorkCardSmall';

const getAllData = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
}
const Library = async () => {
    const works: IWork[] = await getAllData();
    // console.log(exsersiceList);
    return (

        <div id='library' className=" w-full px-4 my-10 sm:px-6 lg:px-8">

            <div className="mb-7 pb-5 sm:mb-9 sm:pb-6">

                {/* Heading */}
                <h2 className="text-2xl font-extrabold text-left text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    THE <span className="text-green-400">LIBRARY</span>
                </h2>

                {/* Description */}
                <p className="max-w-lg text-xs  text-slate-400 sm:text-sm md:text-base">
                    Twelve lifts covering every major muscle group.
                </p>

            </div>


            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                {works.map((work) => (
                    <WorkCardSmall
                        key={work.id}
                        work={work}
                    />
                ))}
            </div>






        </div>

    );
};

export default Library;