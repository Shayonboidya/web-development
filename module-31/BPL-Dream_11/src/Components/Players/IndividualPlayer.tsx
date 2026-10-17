// this component is not connecting any other components



import {
    FaStar,
    FaMapMarkerAlt,
    FaTrophy,
    FaCoins,
    FaArrowLeft,
} from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import type { Iplayer } from "../../Types/Type";

interface IndividualPlayerProps {
    player: Iplayer;
    onBack?: () => void;
}

const IndividualPlayer = ({ player, onBack }: IndividualPlayerProps) => {
    return (
        <section className="min-h-screen bg-base-200 px-4 py-8 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-5xl">
                {/* Back button */}
                {onBack && (
                    <button
                        onClick={onBack}
                        className="mb-6 inline-flex items-center gap-2 rounded-xl
                        border border-base-300 bg-base-100 px-4 py-2
                        font-semibold transition hover:bg-base-300"
                    >
                        <FaArrowLeft />
                        Back to Players
                    </button>
                )}

                {/* Main profile card */}
                <div className="overflow-hidden rounded-3xl border border-base-300
                    bg-base-100 shadow-xl">

                    {/* Hero section */}
                    <div className="relative overflow-hidden bg-linear-to-br
                        from-emerald-950 via-emerald-800 to-slate-900
                        px-6 pb-8 pt-8 text-white sm:px-10 sm:pt-10">

                        <div className="absolute -right-10 -top-16 h-64 w-64
                            rounded-full border-30 border-white/5" />

                        <div className="relative grid items-center gap-8
                            md:grid-cols-2">

                            {/* Player image */}
                            <div className="order-2 flex justify-center md:order-1">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-3xl
                                        bg-emerald-400/20 blur-2xl" />

                                    <img
                                        src={player.playerImg}
                                        alt={player.playerName}
                                        className="relative h-64 w-56 rounded-2xl
                                        object-cover object-top shadow-2xl
                                        sm:h-80 sm:w-64"
                                    />

                                    <span className="absolute -bottom-3 left-1/2
                                        -translate-x-1/2 whitespace-nowrap
                                        rounded-full bg-amber-400 px-4 py-2
                                        text-sm font-extrabold text-slate-900
                                        shadow-lg">
                                        {player.playerType}
                                    </span>
                                </div>
                            </div>

                            {/* Player information */}
                            <div className="order-1 text-center md:order-2 md:text-left">
                                <span className="inline-flex items-center gap-2
                                    rounded-full border border-white/20
                                    bg-white/10 px-3 py-1.5 text-xs
                                    font-bold uppercase tracking-widest">
                                    <MdSportsCricket size={18} />
                                    Player Profile
                                </span>

                                <h1 className="mt-6 text-3xl font-black
                                    leading-tight sm:text-4xl lg:text-5xl">
                                    {player.playerName}
                                </h1>

                                <p className="mt-3 flex items-center justify-center
                                    gap-2 text-emerald-100 md:justify-start">
                                    <FaMapMarkerAlt />
                                    {player.origin}
                                </p>

                                <div className="mt-6 flex flex-wrap justify-center
                                    gap-3 md:justify-start">
                                    <div className="rounded-xl border
                                        border-white/15 bg-white/10 px-4 py-3">
                                        <p className="text-sm text-emerald-100">
                                            Player Rating
                                        </p>
                                        <p className="mt-1 flex items-center
                                            justify-center gap-2 text-xl
                                            font-extrabold md:justify-start">
                                            <FaStar className="text-amber-400" />
                                            {player.rating}
                                            <span className="text-sm font-normal
                                                text-emerald-100">/ 5</span>
                                        </p>
                                    </div>

                                    <div className="rounded-xl border
                                        border-white/15 bg-white/10 px-4 py-3">
                                        <p className="text-sm text-emerald-100">
                                            Auction Price
                                        </p>
                                        <p className="mt-1 flex items-center
                                            justify-center gap-2 text-xl
                                            font-extrabold md:justify-start">
                                            <FaCoins className="text-amber-400" />
                                            {player.playerPrice.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details section */}
                    <div className="p-5 sm:p-8 lg:p-10">
                        <div className="mb-6">
                            <h2 className="text-2xl font-extrabold">
                                Player Overview
                            </h2>
                            <p className="mt-2 text-sm text-base-content/60">
                                Essential information about this cricketer.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2
                            lg:grid-cols-3">

                            <div className="rounded-2xl border border-base-300
                                bg-base-200/60 p-5">
                                <p className="text-sm text-base-content/60">
                                    Full Name
                                </p>
                                <h3 className="mt-2 warp-break-words text-lg
                                    font-bold">
                                    {player.playerName}
                                </h3>
                            </div>

                            <div className="rounded-2xl border border-base-300
                                bg-base-200/60 p-5">
                                <p className="text-sm text-base-content/60">
                                    Nationality
                                </p>
                                <h3 className="mt-2 text-lg font-bold">
                                    {player.origin}
                                </h3>
                            </div>

                            <div className="rounded-2xl border border-base-300
                                bg-base-200/60 p-5">
                                <p className="text-sm text-base-content/60">
                                    Playing Role
                                </p>
                                <h3 className="mt-2 text-lg font-bold">
                                    {player.playerType}
                                </h3>
                            </div>

                            <div className="rounded-2xl border border-base-300
                                bg-base-200/60 p-5">
                                <p className="text-sm text-base-content/60">
                                    Bowling Style
                                </p>
                                <h3 className="mt-2 text-lg font-bold">
                                    {player.bolwingStyle}
                                </h3>
                            </div>

                            <div className="rounded-2xl border border-base-300
                                bg-base-200/60 p-5">
                                <p className="text-sm text-base-content/60">
                                    Player Rating
                                </p>
                                <h3 className="mt-2 flex items-center gap-2
                                    text-lg font-bold">
                                    <FaStar className="text-amber-500" />
                                    {player.rating} out of 5
                                </h3>
                            </div>

                            <div className="rounded-2xl border border-base-300
                                bg-base-200/60 p-5">
                                <p className="text-sm text-base-content/60">
                                    Auction Value
                                </p>
                                <h3 className="mt-2 flex items-center gap-2
                                    text-lg font-bold">
                                    <FaCoins className="text-amber-500" />
                                    {player.playerPrice.toLocaleString()} coins
                                </h3>
                            </div>
                        </div>

                        {/* Player strengths */}
                        <div className="mt-8 rounded-2xl border border-emerald-500/20
                            bg-emerald-500/5 p-5 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-emerald-600 p-3
                                    text-white">
                                    <FaTrophy size={22} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold">
                                        Why choose this player?
                                    </h2>
                                    <p className="text-sm text-base-content/60">
                                        Potential value for your team
                                    </p>
                                </div>
                            </div>

                            <ul className="mt-5 space-y-3 text-sm
                                text-base-content/80 sm:text-base">
                                <li className="flex gap-3">
                                    <span className="font-bold text-emerald-600">
                                        ✓
                                    </span>
                                    <span>
                                        <strong>Versatility:</strong> A{" "}
                                        {player.playerType.toLowerCase()} can
                                        contribute according to the team's needs.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-emerald-600">
                                        ✓
                                    </span>
                                    <span>
                                        <strong>Bowling option:</strong>{" "}
                                        {player.bolwingStyle} provides a
                                        bowling option for the squad.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-emerald-600">
                                        ✓
                                    </span>
                                    <span>
                                        <strong>Budget planning:</strong> The
                                        auction price is{" "}
                                        {player.playerPrice.toLocaleString()} coins.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <p className="mt-5 text-xs text-base-content/50">
                            Rating and auction price are based on your app's
                            player data. Team selection should also consider
                            current form and squad requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndividualPlayer;