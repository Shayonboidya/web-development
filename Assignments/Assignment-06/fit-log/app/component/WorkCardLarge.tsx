import React from 'react';
import { IWork } from '../Type';
import Image from 'next/image';
import AddTodaysPlan from './Button/AddTodaysPlan';
import SaveForLatter from './Button/SaveForLatter';

const WorkCardLarge = ({ work }: { work: IWork }) => {
    return (

        <div className="mx-auto my-5 w-full max-w-7xl px-3 sm:my-8 sm:px-5 lg:px-8">
            <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900 p-4 shadow-2xl sm:gap-8 sm:rounded-3xl sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">

                {/* Exercise Image */}
                <div className="h-64 w-full overflow-hidden rounded-xl bg-slate-800 sm:h-80 lg:sticky lg:top-8 lg:h-[600px]">
                    <Image
                        src={work.image}
                        width={600}
                        height={600}
                        alt={work.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        priority
                    />
                </div>

                {/* Exercise Information */}
                <div className="flex min-w-0 flex-col">

                    {/* Heading */}
                    <div className="mb-5">

                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {work.name}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                            {work.description}
                        </p>
                    </div>

                    {/* Muscle Groups */}
                    <div className="mb-7">
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                            Target Muscle Groups
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {work.muscleGroups.map((muscleGroup) => (
                                <span
                                    key={muscleGroup}
                                    className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs font-semibold text-green-400 sm:text-sm"
                                >
                                    {muscleGroup}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Workout Information */}
                    <div className="mb-8 rounded-2xl border border-slate-700/70 bg-slate-800/60 p-4 sm:p-5">
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                            Workout Information
                        </h3>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6">
                            {[
                                { label: "Equipment", value: work.equipment },
                                { label: "Difficulty", value: work.difficulty },
                                { label: "Sets", value: work.sets },
                                { label: "Reps", value: work.reps },
                                { label: "Duration", value: `${work.duration} min` },
                                { label: "Calories", value: `${work.caloriesBurned} kcal` },
                                { label: "Rating", value: `${work.rating} / 5` },
                            ].map((item) => (
                                <div key={item.label} className="min-w-0">
                                    <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
                                        {item.label}
                                    </p>
                                    <p className="warp-break-words text-sm font-semibold text-white sm:text-base">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mb-8">
                        <div className="mb-5 flex items-center gap-3">
                            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                                INSTRUCTIONS
                            </h3>
                        </div>

                        <ol className="space-y-4">
                            {work.instructions.map((instruction, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                                >
                                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-400/10 text-xs font-bold text-green-400">
                                        {idx + 1}
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto grid grid-cols-1 gap-3 pt-5 sm:grid-cols-2">
                        <AddTodaysPlan work= {work}></AddTodaysPlan>

                        <SaveForLatter work={work}></SaveForLatter>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default WorkCardLarge;