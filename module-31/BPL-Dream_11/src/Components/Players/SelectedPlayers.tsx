// import React from 'react';
import type { Iplayer, ISelectedPlayers } from '../../Types/Type';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ selectedPlayer }: ISelectedPlayers) => {
    return (
        <div>
            <h3>Selected players</h3>
            <div className='grid grid-cols-1 gap-2'>
                {selectedPlayer.map((player: Iplayer, index: number) => (
                    <SelectedPlayerCard player={player} key={index} ></SelectedPlayerCard>
                ))}
            </div>
        </div>
    );
};

export default SelectedPlayers;