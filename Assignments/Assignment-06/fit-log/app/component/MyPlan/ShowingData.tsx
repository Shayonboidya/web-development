
import { IWork } from '@/app/Type';
import React from 'react';

interface ShowingDataProps {
    activeTab: "todays" | "saved";
    todaysPlans: IWork[];
    saved: IWork[];
}

const ShowingData = ({
    activeTab,
    todaysPlans,
    saved
}: ShowingDataProps) => {

    const showData: IWork[] =
        activeTab === "todays" ? todaysPlans : saved;

    const totalMinutes = showData.reduce(
        (acc, work) => acc + Number(work.duration || 0),
        0
    );

    const totalCalories = showData.reduce(
        (acc, work) => acc + Number(work.caloriesBurned || 0),
        0
    );

    const stats = [
        {
            title: "Exercises",
            value: showData.length,
            unit: "Exercises",
            description: "Total workouts"
        },
        {
            title: "Minutes",
            value: totalMinutes,
            unit: "Minutes",
            description: "Total workout time"
        },
        {
            title: "Calories",
            value: totalCalories,
            unit: "Kcal",
            description: "Calories burned"
        }
    ];

    return (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">

            {stats.map((stat) => {
                return (
                    <div
                        key={stat.title}
                        className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:shadow-green-400/5 sm:p-6"
                    >
                        {/* Background decoration */}
                        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/[0.02] transition-transform duration-300 group-hover:scale-150" />

                        <div className="relative flex items-start justify-between gap-3">

                            <div className="min-w-0">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 sm:text-sm">
                                    {stat.title}
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                    {stat.value.toLocaleString()}
                                    <span className="ml-2 text-xs font-medium text-slate-500 sm:text-sm">
                                        {stat.unit}
                                    </span>
                                </h2>

                                <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );
};

export default ShowingData;