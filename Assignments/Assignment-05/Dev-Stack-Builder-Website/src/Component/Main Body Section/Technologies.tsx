import type { ItechnologiesDataType, Itechnology } from "../../Type";
import TechnologieCard from "./TechnologieCard";

const Technologies = ({ technologiesData, stack, setStack }: ItechnologiesDataType) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {
                technologiesData.map((technology: Itechnology) => (
                    <TechnologieCard
                        key={technology.id}
                        technology={technology}
                        stack={stack}
                        setStack={setStack}
                    />
                ))
            }
        </div>
    );
};

export default Technologies;