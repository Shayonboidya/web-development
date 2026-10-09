import './Country.css'

import type { CountryType } from "../../type"
import { useState } from 'react'

export interface CountryProps {
    country: CountryType;
    handelVisitedCountry: (country: CountryType) => void;
    handelvisitedFlag : (flags:string) => void;
}

export default function Country({ country, handelVisitedCountry,handelvisitedFlag }: CountryProps) {
    const [isVisited, setIsVisisted] = useState(false);
    const handelVisited = () => {
        setIsVisisted(!isVisited);
        handelVisitedCountry(country);
    }
    return (
        <div className={`country ${isVisited ? 'country-visited' : ''}`}>
            <p>country name: {country.name.common}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>cappiptal : {country.capital.capital} </p>
            <p>populrion: {country.population.population} </p>

            <button onClick={handelVisited}>{isVisited ? 'visited' : 'mark as visited'}</button>
            {/* <button onClick={() => setIsVisisted(!isVisited)}>{isVisited ? 'visited' : 'mark as visited'}</button> */}
            <button onClick={()  => handelvisitedFlag(country.flags.flags.png)}>add flag as visited</button>
        </div>
    )
}