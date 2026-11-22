import { IWork } from '@/app/Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { MdAccessTime } from 'react-icons/md';
import DeleteSaveCard from './delete/DeleteSaveCard';

const SaveCard = ({ work }: { work: IWork }) => {
    return (

        <div className="group my-4 flex w-full flex-col gap-5 rounded-2xl border border-slate-700/70 bg-slate-900 p-4 shadow-lg transition-all duration-300 hover:border-green-400/40 hover:shadow-green-400/5 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Workout Details */}
            <div className="flex min-w-0 flex-1 items-start gap-4">

                {/* Image */}
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-800 sm:h-28 sm:w-28">
                    <Image
                        src={work.image}
                        width={120}
                        height={120}
                        alt={work.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Information */}
                <div className="min-w-0 flex-1">

                    <h2 className="line-clamp-2 text-base font-bold text-white transition-colors group-hover:text-green-400 sm:text-lg">
                        {work.name}
                    </h2>

                    <p className="mt-1 truncate text-xs text-slate-400 sm:text-sm">
                        {work.equipment}
                    </p>

                    {/* Statistics */}
                    <section className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 sm:gap-x-5 sm:text-sm">

                        <span className="flex items-center gap-1.5">
                            <MdAccessTime className="text-base text-green-400" />
                            {work.duration} min
                        </span>

                        <span className="flex items-center gap-1.5">
                            <FaFire className="text-base text-orange-400" />
                            {work.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1.5">
                            <CiStar className="text-lg text-yellow-400" />
                            {work.rating}
                        </span>

                    </section>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 border-t border-slate-700/70 pt-4 sm:gap-3 lg:border-t-0 lg:pt-0">

                {/* View Details */}
                <Link
                    href={`/excercise/${work.id}`}
                    className="btn h-10 min-h-10 flex-1 rounded-xl border border-slate-600 bg-slate-800 px-3 text-xs font-semibold text-white hover:border-green-400 hover:bg-slate-700 sm:flex-none sm:px-4 sm:text-sm"
                >
                    View Details
                </Link>

                {/* Mark as Done */}
                <button
                    className="btn h-10 min-h-10 flex-1 rounded-xl border-none bg-green-400 px-3 text-xs font-bold text-slate-950 hover:bg-green-300 sm:flex-none sm:px-4 sm:text-sm"
                >
                    <IoMdCheckmark className="text-lg" />
                    Mark as Done
                </button>

                {/* Remove */}
                <DeleteSaveCard work={work} />

            </div>

        </div>

    );
};

export default SaveCard;