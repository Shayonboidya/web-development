import { IWork } from '@/app/Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

const WorkCardSmall = ({ work }: { work: IWork }) => {
    return (
        <Link href={`/excercise/${work.id}`}>
            <div className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/5">

                {/* Workout Image */}
                <div className="relative overflow-hidden bg-slate-900 p-3">
                    <Image
                        src={work.image}
                        width={400}
                        height={250}
                        alt={work.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-48 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                    />

                    {/* Rating Badge */}
                    <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1.5 text-sm font-bold text-yellow-400 backdrop-blur-md">
                        <CiStar className="text-lg" />
                        {work.rating}
                    </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col p-4 sm:p-5">

                    {/* Muscle Groups */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {work.muscleGroups.map((muscleGroup) => (
                            <span
                                key={muscleGroup}
                                className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-400"
                            >
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h2 className="mb-2 line-clamp-1 text-xl font-bold text-white transition-colors group-hover:text-green-400 sm:text-2xl">
                        {work.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mb-5 text-sm text-slate-400">
                        Equipment: <span className="font-medium text-slate-300">{work.equipment}</span>
                    </p>

                    {/* Workout Statistics */}
                    <div className="grid grid-cols-3 gap-2 border-t border-slate-700 pt-4">

                        {/* Duration */}
                        <div className="flex min-w-0 flex-col items-center gap-1 text-center">
                            <MdAccessTime className="text-xl text-green-400 sm:text-2xl" />
                            <span className="text-sm font-bold text-white">
                                {work.duration}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                                Duration
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="flex min-w-0 flex-col items-center gap-1 border-x border-slate-700 px-1 text-center">
                            <FaFire className="text-xl text-orange-400 sm:text-2xl" />
                            <span className="text-sm font-bold text-white">
                                {work.caloriesBurned}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                                Calories
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex min-w-0 flex-col items-center gap-1 text-center">
                            <CiStar className="text-xl text-yellow-400 sm:text-2xl" />
                            <span className="text-sm font-bold text-white">
                                {work.rating}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                                Rating
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </Link>

    );
};

export default WorkCardSmall;