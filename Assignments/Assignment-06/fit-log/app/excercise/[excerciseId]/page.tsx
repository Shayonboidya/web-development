import WorkCardLarge from '@/app/component/WorkCardLarge';
import ExerciseDetailsSkeleton from '@/app/skeliton/ExerciseDetailsSkeleton';
import { IWork } from '@/app/Type';
import React, { Suspense } from 'react';

const WorkPromice = async ({ params }: { params: Promise<{ excerciseId: string }> }) => {
    const { excerciseId } = await params;

    // console.log(excerciseId);
    const id = Number(excerciseId);
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const work:IWork =  await response.json();

    return(
        <WorkCardLarge work={work}></WorkCardLarge>
    );

}


const ExcerciseIdPage = async ({ params }: { params: Promise<{ excerciseId: string }> }) => {

    return (
        <Suspense fallback={<ExerciseDetailsSkeleton></ExerciseDetailsSkeleton>}>
            <WorkPromice params={params}></WorkPromice>
        </Suspense>
    );
};

export default ExcerciseIdPage;