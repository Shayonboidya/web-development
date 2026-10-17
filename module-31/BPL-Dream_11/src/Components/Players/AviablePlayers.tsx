// import React from 'react';
import type { IaviablePlayersCoin, Iplayer } from '../../Types/Type';
import PlayerCard from './PlayerCard';

const AviablePlayers = ({ playes, coin, setCoin, selectedPlayer, setSelectedPlayer }: IaviablePlayersCoin) => {
    return (
        <div className='grid grid-cols-4 gap-3 m-6'>
            {playes.map((player: Iplayer, idx: number) => (
                <PlayerCard
                    key={idx}
                    player={player}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayer={selectedPlayer}
                    setSelectedPlayer={setSelectedPlayer}
                />
            ))}
        </div>
    );
};

export default AviablePlayers;