
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { FaCheck, FaStar } from "react-icons/fa";
import type { Iplayer } from "../../Types/Type";

const PlayerCard = ({ player }: { player: Iplayer }) => {
    const [selected, setSelected] = useState(false);
    console.log(selected);
    return (
        <div className="group relative overflow-hidden rounded-2xl
      border border-base-300 bg-base-100 shadow-lg
      transition-all duration-300 hover:-translate-y-2
      hover:border-primary/50 hover:shadow-2xl">

            {/* Player Image */}
            <div className="relative overflow-hidden bg-base-200">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    loading="lazy"
                    className="h-64 w-full object-cover object-top
            transition-transform duration-500
            group-hover:scale-105 sm:h-72"
                    onError={(e) => {
                        e.currentTarget.src =
                            "/images/player-placeholder.png";
                    }}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t
          from-black/80 via-transparent to-black/20" />

                <span className={`absolute left-4 top-4 rounded-full ${selected ? "bg-red-500" : "bg-emerald-500/90"}
           px-3 py-1 text-xs font-bold
          text-white shadow`}>
                    {selected ? "SOLD" : "AVAILABLE"}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                    <p className="mb-1 text-xs font-semibold uppercase
            tracking-[0.2em] text-white/70">
                        {player.origin}
                    </p>

                    <h2 className="text-2xl font-extrabold text-white
            drop-shadow-md sm:text-3xl">
                        {player.playerName}
                    </h2>

                    <span className="mt-2 inline-flex items-center gap-2
            rounded-full border border-white/20
            bg-white/15 px-3 py-1 text-sm text-white
            backdrop-blur-md">
                        <FaUser size={12} />
                        {player.playerType}
                    </span>
                </div>
            </div>

            {/* Card Details */}
            <div className="space-y-5 p-5">

                <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-base-content/60">
                        Player information
                    </span>

                    <div className="flex items-center gap-1
            text-amber-500">
                        <FaStar />
                        <span className="text-sm font-bold">{player.rating} </span>
                        <span className="text-xs text-base-content/50">
                            / 5
                        </span>
                    </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl
          bg-base-200/70 p-3">
                    <div className="rounded-lg bg-primary/10 p-3
            text-primary">
                        <MdSportsCricket size={23} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-base-content/60">
                            Bowling Style
                        </p>
                        <p className="mt-1 wrap-break-word font-semibold">
                            {player.bolwingStyle || "Not specified"}
                        </p>
                    </div>
                </div>

                <div className="divider my-0" />

                <div className="flex items-end justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase
              tracking-wider text-base-content/50">
                            Auction Price
                        </p>

                        <p className="mt-1 text-2xl font-extrabold
              text-primary sm:text-3xl">
                            ${Number(player.playerPrice).toLocaleString()}
                        </p>
                    </div>

                    <span className="rounded-lg bg-primary/10 px-3
            py-2 text-xs font-bold text-primary">
                        PLAYER
                    </span>
                </div>

                <button
                    onClick={() => setSelected(true)}
                    disabled={selected ? true : false}
                    className={`btn w-full rounded-xl border-0 text-base
            font-bold shadow-md transition-all duration-200
            hover:shadow-lg ${selected
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : "bg-primary text-primary-content hover:brightness-110"
                        }`
                    }
                >

                    {selected ? (
                        <>
                            <FaCheck /> Player Selected
                        </>
                    ) : (
                        <>
                            <FaUser /> Choose Player
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;
