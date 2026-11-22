import { IWork } from '@/app/Type';
import { WorksContext } from '@/Context/WorksProvider';
import React, { useContext } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const DeleteSaveCard = ({ work }: { work: IWork }) => {
    const { saved,setSaved } = useContext(WorksContext) as {
        saved: IWork[];
        setSaved: React.Dispatch<React.SetStateAction<IWork[]>>;
    };

    const works: IWork[] = [...saved];

    const alrayHave = works.find(w => w.id === work.id);
    const handelClickDeletePlan = () => {
        if (alrayHave) {
            const newWorks = works.filter(w => w.id !== work.id);
            setSaved(newWorks);
            toast.error("Removed from save");
        }
    }
    return (
        <button
            onClick={() => handelClickDeletePlan()}
            aria-label="Remove workout"
            className="btn btn-square h-10 min-h-10 w-10 rounded-xl border border-red-400/20 bg-red-400/10 text-red-400 hover:border-red-400 hover:bg-red-400 hover:text-white"
        >
            <FaXmark className="text-lg" />
        </button>
    );
};

export default DeleteSaveCard;