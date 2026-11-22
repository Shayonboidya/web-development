import SaveCard from './SaveCard';
import { IWork } from '@/app/Type';
import Link from 'next/link';

const SavedCardBody = ({newSaveCard}:{newSaveCard:IWork[]}) => {

    

    const works: IWork[] = [...newSaveCard];
    // console.log(saved);
    return (
        <div>
            {
                works.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4 md:gap-5">
                    {works.map((work: IWork) => (
                        <SaveCard
                            key={work.id}
                            work={work}
                        />
                    ))}
                </div>) :
                    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/70 px-5 py-12 text-center sm:min-h-[420px] sm:rounded-3xl sm:px-8">

                        {/* Heading */}
                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                            NOTHING <span className="text-green-400">HERE YET</span>
                        </h2>

                        {/* Description */}
                        <p className="mt-3 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                            Browse the library and add a lift to get today moving.
                        </p>

                        {/* Button */}
                        <Link
                            href="/excercise"
                            className="btn mt-7 h-12 rounded-xl border-none bg-green-400 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-green-400/10 transition-all hover:-translate-y-1 hover:bg-green-300"
                        >
                            Explore Workouts
                        </Link>


                    </div>

            }
        </div>
    );
};

export default SavedCardBody;