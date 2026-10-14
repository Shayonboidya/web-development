import React, { use } from 'react';
import type { Iplayer } from '../../Types/Type';
interface playerType {
    playesPromice: Promise<Iplayer[]>
}
const Playes = ({ playesPromice }: playerType) => {
    const playes = use(playesPromice);
    console.log(playes);
    return (
        <div>

        </div>
    );
};

export default Playes;