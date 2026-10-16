import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Playes from "./Components/Players/Playes";
import type { Iplayer } from "./Types/Type";

function App() {

    const playesPromice = async (): Promise<Iplayer[]> => {
        const res = await fetch('/data.json');
        const data = await res.json();
        return data.players;
    }
    return (
        <>

            <Nav></Nav>
            <Banner></Banner>
            <Suspense fallback={<p>loading...</p>}>
                <Playes playesPromice={playesPromice()} ></Playes>

            </Suspense>
        </>
    )
}

export default App
