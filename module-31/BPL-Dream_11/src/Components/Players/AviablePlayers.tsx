// import React from 'react';
import type { Iplayer } from '../../Types/Type';
import PlayerCard from './PlayerCard';

const AviablePlayers = ({ playes }: { playes: Iplayer[] }) => {
    return (
        <div className='grid grid-cols-3 gap-3 m-6'>
            {
                playes.map((player: Iplayer, idx:number) => {
                    return (
                        <PlayerCard key={idx} player={player}></PlayerCard>
                    )
                })
            }
        </div>
    )
};

export default AviablePlayers;