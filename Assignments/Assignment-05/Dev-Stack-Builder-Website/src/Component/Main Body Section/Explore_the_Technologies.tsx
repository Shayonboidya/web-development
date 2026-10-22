
import { use, useState } from "react";
import Technologies from "./Technologies";
import TechnologyStack from "./TechnologyStack";
import type { ItechnologiesPromiceType, Itechnology } from "../../Type";

const ExploreTheTechnologies = ({ technologiesPromice }: ItechnologiesPromiceType) => {
    const [stack, setStack] = useState<Itechnology[]>([]);
    const technologiesData = use(technologiesPromice);

    return (
        <section className="py-8 sm:py-10 lg:py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <header className="mb-6 lg:mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Explore the{" "}
                        <span className="bg-linear-to-r from-red-700 to-purple-600 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="max-w-2xl text-base  text-gray-500 sm:text-lg lg:text-xl">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
                    <div className="md:col-span-2 lg:col-span-3">
                        <Technologies
                            technologiesData={technologiesData}
                            stack={stack}
                            setStack={setStack}
                        />
                    </div>

                    <div
                        className="md:col-span-1">
                        <TechnologyStack
                            stack={stack}
                            setStack={setStack}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreTheTechnologies;
