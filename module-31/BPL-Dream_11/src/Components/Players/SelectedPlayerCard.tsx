
import { RiDeleteBin6Line } from "react-icons/ri";
import type { Iplayer, ISelectedPlayerCard } from "../../Types/Type";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { Bounce, toast } from "react-toastify";


const SelectedPlayerCard = ({ player, selectedPlayer, setSelectedPlayer, coin, setCoin }: ISelectedPlayerCard) => {


    const handelRemovedPlayer = (player: Iplayer) => {
        const restPlayer = selectedPlayer.filter((p: Iplayer) => p.playerName != player.playerName);
        console.log(restPlayer);
        setSelectedPlayer(restPlayer);
        setCoin(coin + player.playerPrice);

        toast(`${player.playerName} is removed hare`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className="group flex w-full min-w-0 items-center gap-3
            rounded-2xl border border-base-300 bg-base-100
            p-3 shadow-sm transition-all duration-300
            hover:-translate-y-0.5 hover:border-primary/40
            hover:shadow-lg sm:gap-4 sm:p-4">




            {/* Player Image */}
            <div className="relative shrink-0">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    loading="lazy"
                    className="h-16 w-16 rounded-xl border border-base-300
                        object-cover object-top sm:h-20 sm:w-20"
                />

                <span className="absolute -bottom-1 -right-1
                    flex h-5 w-5 items-center justify-center
                    rounded-full border-2 border-base-100
                    bg-emerald-500 text-xs text-white">
                    ✓
                </span>
            </div>

            {/* Player Information */}
            <div className="min-w-0 flex-1 space-y-1">
                <h2 className="truncate text-sm font-bold
                    text-base-content transition-colors
                    group-hover:text-primary sm:text-base">
                    {player.playerName}
                </h2>

                <p className="flex items-center gap-1.5
                    text-xs text-base-content/60 sm:text-sm">
                    <FaUser className="shrink-0" />
                    <span className="truncate">
                        {player.playerType}
                    </span>
                </p>

                <p className="flex items-center gap-1.5
                    text-xs text-base-content/60">
                    <FaMapMarkerAlt className="shrink-0 text-primary" />
                    <span className="truncate">{player.origin}</span>
                </p>

                <span className="inline-flex items-center gap-1
                    rounded-full bg-primary/10 px-2 py-0.5
                    text-[10px] font-semibold text-primary sm:text-xs">
                    <MdSportsCricket size={13} />
                    Selected Player
                </span>
            </div>

            {/* Delete Icon: Design Only */}
            <div className="shrink-0">
                <span
                    onClick={() => handelRemovedPlayer(player)}
                    className="flex h-9 w-9 items-center justify-center
                        rounded-xl bg-red-500/10 text-xl text-red-500
                        transition-all duration-200
                        hover:bg-red-500 hover:text-white
                        sm:h-10 sm:w-10 sm:text-2xl"
                    title="Remove player"
                >
                    <RiDeleteBin6Line />
                </span>
            </div>
        </div>
    );
};

export default SelectedPlayerCard;
