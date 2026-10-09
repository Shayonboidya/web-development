
import { Suspense } from 'react';
import './App.css'
import Countries from './component/Countries/Countries';
import type { CountryType } from './type';

const countriesPromices = async (): Promise<CountryType[]> => {
    const res = await fetch("https://openapi.programming-hero.com/api/all");
    const data = await res.json();
    return data.countries;
}

function App() {

    return (
        <>
            <h2>World on the go..........</h2>
            <Suspense fallback={<p>Loadding data...</p>}>
                <Countries countriesPromise={countriesPromices()}></Countries>
            </Suspense>
        </>
    )
}

export default App
