
const ExerciseDetailsSkeleton = () => {
    return (
        <div className="mx-auto my-5 w-full max-w-7xl animate-pulse px-3 sm:my-8 sm:px-5 lg:px-8">
            <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900 p-4 shadow-2xl sm:gap-8 sm:rounded-3xl sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">

                {/* Image Skeleton */}
                <div className="h-64 w-full rounded-xl bg-slate-800 sm:h-80 lg:h-[600px]" />

                {/* Details Skeleton */}
                <div className="flex min-w-0 flex-col">

                    {/* Heading */}
                    <div className="mb-5 space-y-4">
                        <div className="h-3 w-32 rounded bg-slate-700" />
                        <div className="h-9 w-4/5 rounded-lg bg-slate-700 sm:h-12" />
                        <div className="space-y-2">
                            <div className="h-3 w-full rounded bg-slate-800" />
                            <div className="h-3 w-full rounded bg-slate-800" />
                            <div className="h-3 w-3/4 rounded bg-slate-800" />
                        </div>
                    </div>

                    {/* Muscle Groups */}
                    <div className="mb-7">
                        <div className="mb-3 h-3 w-40 rounded bg-slate-700" />

                        <div className="flex flex-wrap gap-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="h-9 w-20 rounded-full bg-slate-800"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Workout Information */}
                    <div className="mb-8 rounded-2xl border border-slate-700/70 bg-slate-800/60 p-4 sm:p-5">
                        <div className="mb-5 h-4 w-44 rounded bg-slate-700" />

                        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6">
                            {Array.from({ length: 7 }).map((_, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="h-3 w-20 rounded bg-slate-700" />
                                    <div className="h-4 w-28 max-w-full rounded bg-slate-800" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mb-8">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="h-7 w-1 rounded-full bg-slate-700" />
                            <div className="h-6 w-40 rounded bg-slate-700" />
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <div className="h-7 w-7 shrink-0 rounded-full bg-slate-700" />
                                    <div className="mt-2 h-3 w-full rounded bg-slate-800" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto grid grid-cols-1 gap-3 pt-5 sm:grid-cols-2">
                        <div className="h-12 rounded-lg bg-slate-700" />
                        <div className="h-12 rounded-lg bg-slate-800" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExerciseDetailsSkeleton;
