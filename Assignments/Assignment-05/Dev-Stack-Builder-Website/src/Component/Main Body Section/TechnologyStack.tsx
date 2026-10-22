
import type { ItechnologyStack } from "../../Type";
import TechnologyStackCard from "./TechnologyStackCard";

const TechnologyStack = ({
    stack,
    setStack,
}: ItechnologyStack) => {
    const handleRemoveAll = () => {
        setStack([]);
    };

    return (
        <aside className="w-full min-w-0 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4 lg:p-5">

            {/* Header */}
            <div className="flex flex-col  gap-3">
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Your Stack
                </h2>

                <span className="text-base font-semibold text-gray-400">
                    {
                        stack.length === 0 ? "No techonologys selected yet" : `${stack.length} Ttechonologys selected`
                    }
                </span>
            </div>

            {/* Empty State */}
            {stack.length === 0 ? (
                <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-8 text-center sm:py-10">

                    <p className="mt-3 text-base font-semibold text-gray-400">
                        Your stack is empty
                    </p>
                </div>
            ) : (
                <>

                    {/* Selected Technologies */}
                    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-1">
                        {stack.map((technology) => (
                            <div
                                key={technology.name}
                                className="min-w-0"
                            >
                                <TechnologyStackCard
                                    techonology={technology}
                                    stack={stack}
                                    setStack={setStack}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Remove All Button */}
                    <button
                        type="button"
                        onClick={handleRemoveAll}
                        className="mt-5 w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition-colors hover:border-red-300 hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:scale-[0.98] sm:text-base"
                    >
                        Remove All
                    </button>
                </>
            )}
        </aside>
    );
};

export default TechnologyStack;
