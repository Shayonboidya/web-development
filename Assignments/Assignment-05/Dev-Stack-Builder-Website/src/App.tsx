import { Suspense, useState } from "react";
import Banner from "./Component/Banner Section/Banner"
import Explore_the_Technologies from "./Component/Main Body Section/Explore_the_Technologies"
import Nav from "./Component/Nav Section/Nav"
import Footer from "./Component/Footter Section/Footer";


const tecnologiesFetch = async () => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
}
function App() {

    const [technologiesPromice] = useState(() => tecnologiesFetch());
    return (
        <>
            <Nav></Nav>
            <Banner></Banner>
            <Suspense fallback={<p>loading...</p>}>
                <Explore_the_Technologies technologiesPromice={technologiesPromice} ></Explore_the_Technologies>
            </Suspense>
            <Footer></Footer>
        </>
    )
}

export default App
