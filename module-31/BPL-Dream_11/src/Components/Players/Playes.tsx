import { use, useState } from 'react';
import type { playerType } from '../../Types/Type';
import AviablePlayers from './AviablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Playes = ({ playesPromice }: playerType) => {
    const playes = use(playesPromice);
    // console.log(playes);

    const [buttonType, setButtonType] = useState("aviable");
    const handelUpdateButton = (type: "aviable" | "selected") => {
        setButtonType(type);
    }

    return (
        <div className='container mx-auto m-10'>
            <div className='flex justify-between m-2'>
                <h2 className='text-2xl font-bold'>{buttonType === "aviable"? `Aviable Players`:``}</h2>
                <div className='flex'>
                    <button onClick={() => handelUpdateButton("aviable")} className={`btn ${buttonType === 'aviable' ? 'btn-success' : ''} rounded-r-none`}>Aviable</button>
                    <button onClick={() => handelUpdateButton("selected")} className={`btn ${buttonType === 'selected' ? 'btn-success' : ''} rounded-l-none`}>Selected</button>
                </div>
            </div>
            {buttonType === "aviable" ? <AviablePlayers playes={playes}></AviablePlayers> : <SelectedPlayers></SelectedPlayers>}



        </div>
    );
};

export default Playes;