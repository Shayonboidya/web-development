"use client"
import TodaysPlanBody from '../component/MyPlan/TodaysPlanCardBody';
import SavedCardBody from '../component/MyPlan/SavedCardBody';
import ShowingData from '../component/MyPlan/ShowingData';
import { useContext, useState } from 'react';
import { WorksContext } from '@/Context/WorksProvider';
import { IWork } from '../Type';

const MyPlanPage = () => {
    const [sortBy, setSortBy] = useState<"Ratting" | "Minutes" | "Calories">("Minutes");

    const [activeTab, setActiveTab] = useState<"todays" | "saved">("todays");

    const { todaysPlans, saved } = useContext(WorksContext) as {
        todaysPlans: IWork[];
        saved: IWork[];
    }
    // sort
    const sortByWork = (works: IWork[]) => {
        const newSortedWork = [...works];
        if (sortBy === "Minutes") {
            newSortedWork.sort((a, b) => b.duration - a.duration);
        }
        else if (sortBy === 'Ratting') {
            newSortedWork.sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy === "Calories") {
            newSortedWork.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        return newSortedWork;
    }

    const newTodaysPlan = sortByWork(todaysPlans);
    const newSaveCard = sortByWork(saved);



    return (

        <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-5 sm:py-8 lg:px-8">

            {/* Header */}
            <div className="mb-7 flex flex-col gap-3 border-b border-slate-700/70 pb-6 sm:mb-9 sm:pb-7">
                <div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        MY <span className="text-green-400">PLAN</span>
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>
            </div>



            {/* children */}
            <ShowingData activeTab={activeTab}  todaysPlans={todaysPlans} saved={saved}></ShowingData>
            {/* Tabs and Sorting */}

            {/* Sort By */}
            <div className="mb-5 flex w-full justify-end">
                <select
                    defaultValue="sort"
                    className="select h-11 min-h-11 w-full max-w-xs rounded-xl border border-slate-700 bg-slate-900 px-4 text-sm font-semibold text-slate-300 shadow-lg outline-none transition-all hover:border-green-400/50 focus:border-green-400 focus:outline-none"
                    onChange={(e) => setSortBy(e.target.value as "Ratting" | "Minutes" | "Calories")}
                >
                    <option value="sort" disabled>
                        Sort By
                    </option>
                    <option value="Minutes">Minutes</option>
                    <option value="Ratting">Ratting</option>
                    <option value="Calories">Calories</option>
                </select>
            </div>

            {/* Tabs */}
            {/* <div className="w-full min-w-0"> */}
            <div className="tabs tabs-lift w-full">

                {/* Today's Plan */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab min-w-0 flex-1 whitespace-nowrap px-2 text-xs font-bold text-slate-400 transition-colors checked:text-green-400 sm:flex-none sm:px-7 sm:text-sm"
                    aria-label="Today's Plan"
                    checked={activeTab === "todays"}
                    onChange={() => setActiveTab("todays")}
                />

                <div className="tab-content min-w-0 rounded-b-2xl rounded-tr-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl sm:p-5 md:p-6">

                    <TodaysPlanBody newTodaysPlan={newTodaysPlan} />

                </div>

                {/* Saved */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab min-w-0 flex-1 whitespace-nowrap px-2 text-xs font-bold text-slate-400 transition-colors checked:text-green-400 sm:flex-none sm:px-7 sm:text-sm"
                    aria-label="Saved"
                    checked={activeTab === "saved"}
                    onChange={() => setActiveTab("saved")}
                />

                <div className="tab-content min-w-0 rounded-b-2xl rounded-tr-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl sm:p-5 md:p-6">

                    <SavedCardBody newSaveCard={newSaveCard} />

                </div>

                {/* </div> */}
            </div>


        </div>

    );
};

export default MyPlanPage;