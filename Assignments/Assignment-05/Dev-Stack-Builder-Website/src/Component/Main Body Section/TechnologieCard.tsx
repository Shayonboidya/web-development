
import { FaStar } from "react-icons/fa";
import type { ItechnologieCard } from "../../Type";

const TechnologieCard = ({ technology, stack, setStack }: ItechnologieCard) => {

    const isSelected = stack.some((item) => item.id === technology.id);

    // handeral function
    const handelAddToStack = () => {
        setStack((prevStack) => {
            const alradyExist = prevStack.some((item) => item.id === technology.id)
            if (alradyExist) return prevStack;
            return [...prevStack, technology];
        });
    }
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl sm:p-5">
            {/* Icon and Badge */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2 transition-colors group-hover:bg-purple-50 sm:h-16 sm:w-16">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                    />
                </div>

                <span className="max-w-[60%] rounded-full bg-blue-50 px-3 py-1.5 text-center text-xs font-semibold text-blue-700 sm:text-sm">
                    {technology.badge}
                </span>
            </div>

            {/* Technology Details */}
            <div className="mt-4 flex-1">
                <h2 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-purple-700 sm:text-xl">
                    {technology.name}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                    {technology.description}
                </p>
            </div>

            {/* Metadata */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700 sm:text-sm">
                    {technology.category}
                </span>

                <span className="rounded-lg bg-purple-50 px-2.5 py-1.5 text-xs font-medium text-purple-700 sm:text-sm">
                    {technology.difficulty}
                </span>

                <span className="ml-auto inline-flex items-center gap-1 text-sm font-bold text-gray-800">
                    <FaStar color="#fbbf24" aria-hidden="true" />
                    {technology.rating}
                </span>
            </div>

            {/* Action */}
            <button
                type="button"
                onClick={handelAddToStack}
                disabled={isSelected}
                className={`mt-5 inline-flex w-full items-center justify-center rounded-xl ${isSelected ? "bg-gray-200  hover:bg-purple-200 text-gray-800" : "bg-gray-900 text-white hover:bg-purple-700"}  px-4 py-3 text-sm font-semibold  transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 active:scale-[0.98]`}
            >
                {
                    isSelected ? 'Added to Stack' : "Add to Stack"
                }

            </button>
        </article >
    );
};

export default TechnologieCard;
