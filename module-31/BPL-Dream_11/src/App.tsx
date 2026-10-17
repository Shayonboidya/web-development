import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Playes from "./Components/Players/Playes";
import type { Iplayer } from "./Types/Type";

function App() {
    const [coin, setCoin] = useState(20000);
    const [selectedPlayer, setSelectedPlayer] = useState<Iplayer[]>([]);

    const playesPromice = async (): Promise<Iplayer[]> => {
        const res = await fetch('/data.json');
        const data = await res.json();
        return data.players;
    }
    return (
        <>

            <Nav coin={coin}></Nav>
            <Banner></Banner>
            <Suspense fallback={<p>loading...</p>}>
                <Playes playesPromice={playesPromice()} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></Playes>

            </Suspense>
        </>
    )
}

export default App
