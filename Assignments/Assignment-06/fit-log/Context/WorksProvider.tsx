"use client"
import { IWork } from '@/app/Type';
import React, { createContext, useState } from 'react';

interface IWorksContext {
    todaysPlans: IWork[];
    setTodaysPlans: React.Dispatch<React.SetStateAction<IWork[]>>;
    saved: IWork[];
    setSaved: React.Dispatch<React.SetStateAction<IWork[]>>;
}

export const WorksContext = createContext<IWorksContext | undefined>(undefined);

const WorksProvider = ({ children }: { children: React.ReactNode }) => {

    const [todaysPlans, setTodaysPlans] = useState<IWork[]>([]);
    const [saved, setSaved] = useState<IWork[]>([]);

    const value = {
        todaysPlans,
        setTodaysPlans,
        saved,
        setSaved
    };

    return <WorksContext.Provider value={value}>{children}</WorksContext.Provider>;
};

export default WorksProvider;