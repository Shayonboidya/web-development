
"use client"
import { IWork } from '@/app/Type';
import { WorksContext } from '@/Context/WorksProvider';
import React, { useContext } from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { toast } from 'react-toastify';

const AddTodaysPlan = ({ work }: { work: IWork }) => {
    const { todaysPlans, setTodaysPlans } = useContext(WorksContext) as {
        todaysPlans: IWork[];
        setTodaysPlans: React.Dispatch<React.SetStateAction<IWork[]>>;
    };
    const hasAlrady = todaysPlans.find(w => w.id === work.id);
    const handelClickAddTodaysPlan = () => {
        if (!hasAlrady) {
            setTodaysPlans((prev) => [...prev, work]);
            toast.success("Todays plan card Added")
        } else {
            toast.warning("Todays plan card alrady exist")
        }
    }
    console.log(todaysPlans);

    return (
        // <Link href={``} className="w-full">
        <button
            onClick={() => handelClickAddTodaysPlan()}
            className="btn h-12 w-full border-none bg-green-400 text-lg font-bold text-slate-950 shadow-lg shadow-green-400/10 transition-all hover:bg-green-300">
            <CiCalendarDate className="text-lg" />
            Add Today&apos;s Plan
        </button>
        // </Link>
    );
};

export default AddTodaysPlan;