"use client"
import { WorksContext } from '@/Context/WorksProvider';
import { useContext } from 'react';
import { IWork } from '../Type';
import Link from 'next/link';

export const NavLinksButton = () => {
    const { todaysPlans, saved } = useContext(WorksContext) as {
        todaysPlans: IWork[];
        saved: IWork[];
    };


    const navLinksButton = [
        { name: `Plan`, count: todaysPlans.length, link: "/my-plan" },
        { name: `Saved`, count: saved.length, link: "/my-plan" }
    ]

    return (

        <div className="navbar-end">

            <ul className="flex items-center gap-2 sm:gap-3">

                {navLinksButton.map((navlinkButton, index) => (
                    <li key={navlinkButton.name}>

                        <Link
                            href={navlinkButton.link}
                            className={`group flex h-9 items-center gap-1.5 rounded-full px-2.5 text-xs font-bold transition-all duration-300 sm:h-10 sm:gap-2 sm:px-4 sm:text-sm md:px-5 ${index === 1
                                    ? "bg-green-500 text-white shadow-md shadow-green-500/20 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
                                    : "border border-slate-700 bg-slate-900 text-slate-200 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400"
                                }`}
                        >

                            {/* Button Name */}
                            <span className="whitespace-nowrap">
                                {navlinkButton.name}
                            </span>

                            {/* Count Badge */}
                            <span
                                className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-extrabold transition-colors duration-300 sm:h-6 sm:min-w-6 sm:text-xs ${index === 1
                                        ? "bg-white/20 text-white"
                                        : "bg-green-500/15 text-green-400 group-hover:bg-green-500 group-hover:text-white"
                                    }`}
                            >
                                {navlinkButton.count}
                            </span>

                        </Link>

                    </li>
                ))}

            </ul>

        </div>

    );
};

