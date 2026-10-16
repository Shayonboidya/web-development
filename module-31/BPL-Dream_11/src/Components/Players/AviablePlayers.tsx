// import React from 'react';
import type {Iplayer } from '../../Types/Type';

const AviablePlayers = ({ playes }: { playes: Iplayer[] }) => {
    return (
        <div className='grid grid-cols-3 gap-3 m-6'>
            {
                playes.map((player:Iplayer) => {
                    return (
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={player.playerImg}
                                    alt={player.playerName} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{player.playerName}</h2>
                                <div>
                                    <p></p>
                                </div>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AviablePlayers;