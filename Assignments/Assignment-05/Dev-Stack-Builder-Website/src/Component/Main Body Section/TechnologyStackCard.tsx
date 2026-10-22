
import { TiTimes } from "react-icons/ti";
import type { ItechnologyStackCard } from "../../Type";

const TechnologyStackCard = ({
    techonology,
    stack,
    setStack
}: ItechnologyStackCard) => {
    const handelIsClickTimes = () => {
        const remainStack = stack.filter((item) => item.id !== techonology.id);
        setStack(remainStack);
    }
    return (
        <section className="w-full min-w-0">
            <div className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:border-purple-300 hover:shadow-md sm:gap-4 sm:p-4">

                {/* Technology Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2 transition-colors group-hover:bg-purple-50 sm:h-14 sm:w-14">
                    <img
                        src={techonology.icon}
                        alt={`${techonology.name} icon`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Technology Details */}
                <div className="min-w-0 flex-1">
                    <h2 className="truncate text-sm font-bold text-gray-900 transition-colors group-hover:text-purple-700 sm:text-base">
                        {techonology.name}
                    </h2>

                    <p className="mt-1 truncate text-xs text-gray-500 sm:text-sm">
                        {techonology.category}
                    </p>
                </div>

                {/* Remove Button */}
                <button
                    type="button"
                    onClick={handelIsClickTimes}
                    aria-label={`Remove ${techonology.name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:scale-90"
                >
                    <TiTimes size={24} />
                </button>

            </div>
        </section>
    );
};

export default TechnologyStackCard;
