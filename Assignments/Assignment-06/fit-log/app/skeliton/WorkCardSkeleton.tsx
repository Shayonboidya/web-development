
const WorkCardSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800 p-3 shadow-lg">

            {/* Image Skeleton */}
            <div className="h-48 w-full animate-pulse rounded-xl bg-slate-700 sm:h-52" />

            {/* Content Skeleton */}
            <div className="p-2 pt-4">

                {/* Muscle Groups */}
                <div className="mb-5 flex gap-2">
                    <div className="h-7 w-20 animate-pulse rounded-full bg-slate-700" />
                    <div className="h-7 w-24 animate-pulse rounded-full bg-slate-700" />
                </div>

                {/* Workout Name */}
                <div className="mb-3 h-6 w-3/4 animate-pulse rounded-lg bg-slate-700" />

                {/* Equipment */}
                <div className="mb-6 h-4 w-1/2 animate-pulse rounded-lg bg-slate-700" />

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-700 pt-4">

                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="h-6 w-6 animate-pulse rounded-full bg-slate-700" />
                            <div className="h-4 w-12 animate-pulse rounded-md bg-slate-700" />
                            <div className="h-3 w-14 animate-pulse rounded-md bg-slate-700" />
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};


const LibrarySkeleton = () => {
    return (
        <div className="w-full px-4 py-6 sm:px-6 lg:px-8">

            {/* Heading Skeleton */}
            <div className="mb-7 border-b border-slate-700/70 pb-5 sm:mb-9">

                <div className="mb-3 h-9 w-52 animate-pulse rounded-lg bg-slate-700 sm:h-12 sm:w-64" />

                <div className="h-4 w-64 max-w-full animate-pulse rounded-md bg-slate-700 sm:w-96" />

            </div>

            {/* Workout Cards Skeleton */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

                {Array.from({ length: 8 }).map((_, index) => (
                    <WorkCardSkeleton key={index} />
                ))}

            </div>

        </div>
    );
};

export default LibrarySkeleton;
