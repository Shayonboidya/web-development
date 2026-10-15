import  { use } from 'react';
import type { Iplayer } from '../../Types/Type';
interface playerType {
    playesPromice: Promise<Iplayer[]>
}
const Playes = ({ playesPromice }: playerType) => {
    const playes = use(playesPromice);
    console.log(playes);
    return (
        <div>
            {
                playes.map((player)=>
                   <p>{player.playerName}</p>
                )
            }
        </div>
    );
};

export default Playes;