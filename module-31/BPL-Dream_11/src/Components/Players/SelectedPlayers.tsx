// import React from 'react';
import type { ISelectedPlayers } from '../../Types/Type';

const SelectedPlayers = ({ selectedPlayer }: ISelectedPlayers) => {
    return (
        <div>
            <h3>Selected players</h3>
            {selectedPlayer.map((player, index) => (
                <h3 key={player.playerName ?? index}>{player.playerName}</h3>
            ))}
        </div>
    );
};

export default SelectedPlayers;