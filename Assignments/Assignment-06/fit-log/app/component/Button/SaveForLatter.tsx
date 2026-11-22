"use client"
import { IWork } from '@/app/Type';
import { WorksContext } from '@/Context/WorksProvider';
import React, { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SaveForLatter = ({ work }: { work: IWork }) => {

    const { saved, setSaved } = useContext(WorksContext) as {
        saved: IWork[];
        setSaved: React.Dispatch<React.SetStateAction<IWork[]>>;
    };
    const hasAlrady = saved.find(w => w.id === work.id);
    const handelClickSaveForLatter = () => {
        if (!hasAlrady) {
            setSaved((prev) => [...prev, work]);
            toast.success("Save for Latter card Added")
        } else {
            toast.warning("Save for Latter card alrady exist")
        }
    }
    console.log(saved);

    return (
        // <Link href="/" className="w-full">
        <button
            onClick={() => handelClickSaveForLatter()}
            className="btn h-12 w-full border border-slate-600 bg-slate-800 text-lg font-bold text-white transition-all hover:border-green-400 hover:bg-slate-700">
            <FaBookmark className="text-lg" />
            Save For Later
        </button>
        // </Link>
    );


};

export default SaveForLatter;