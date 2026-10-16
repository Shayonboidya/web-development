import { use } from 'react';
import type { playerType } from '../../Types/Type';
import AviablePlayers from './AviablePlayers';

const Playes = ({ playesPromice }: playerType) => {
    const playes = use(playesPromice);
    // console.log(playes);
    return (
        <div className='container mx-auto m-10'>
            <div className='flex justify-between m-2'>
                <h2 className='text-2xl font-bold'>Aviable Players</h2>
                <div className='flex'>
                    <button className="btn btn-success">Aviable</button>
                    <button className="btn btn-success">Selected</button>
                </div>
            </div>
            <AviablePlayers playes={playes}></AviablePlayers>



        </div>
    );
};

export default Playes;