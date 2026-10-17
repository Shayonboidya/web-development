import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Playes from "./Components/Players/Playes";
import type { Iplayer } from "./Types/Type";
const playesFatch = async (): Promise<Iplayer[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data.players;
}

function App() {
    // const playesPromice = playesFatch();
    const [playesPromice] = useState(() => playesFatch())


    const [coin, setCoin] = useState(20000);
    const [selectedPlayer, setSelectedPlayer] = useState<Iplayer[]>([]);
    return (
        <>

            <Nav coin={coin}></Nav>
            <Banner></Banner>
            <Suspense fallback={<p>loading...</p>}>
                <Playes playesPromice={playesPromice} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></Playes>

            </Suspense>
        </>
    )
}

export default App
