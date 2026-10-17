// import React from 'react';
import type { Iplayer, ISelectedPlayers } from '../../Types/Type';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer, coin, setCoin }: ISelectedPlayers) => {
    const selectedPlayerLength: number = selectedPlayer.length;
    if (selectedPlayerLength === 0) {
        return <h2 className="text-2xl text-center text-red-500 my-10 font-bold">No Selected Player</h2>
    }
    return (
        <div>
            <h3>Selected players</h3>
            <div className='grid grid-cols-1 gap-2'>
                {selectedPlayer.map((player: Iplayer, index: number) => (
                    <SelectedPlayerCard
                        player={player}
                        key={index}
                        selectedPlayer={selectedPlayer}
                        setSelectedPlayer={setSelectedPlayer}
                        coin={coin}
                        setCoin={setCoin}>

                    </SelectedPlayerCard>
                ))}
            </div>
        </div>
    );
};

export default SelectedPlayers;