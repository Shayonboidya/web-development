import { use, useState } from "react"
import type { CountryType } from "../../type"
import Country from "../country/Country";
import './Countries.css'
export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const countries = use(countriesPromise);
    // console.log(countries);

    const [visitedContry, setVisitedCountry] = useState<CountryType[]>([]);
    const [visitedFlag, setVisitedFlag] = useState<string[]>([]);

    const handelVisitedCountry = (country: CountryType): void => {
        // bad way to chack
        // if (visitedContry.includes(country)) {
        //     const remainngvisitedCountry = visitedContry.filter(c => c !== country);
        //     setVisitedCountry(remainngvisitedCountry);
        // } else {
        //     const newVisitedCount = [...visitedContry, country];
        //     setVisitedCountry(newVisitedCount);
        // }

        // good way to chack
        const exist = visitedContry.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
        if(exist){
            const remainingCountry = visitedContry.filter(c => c.ccn3.ccn3 != country.ccn3.ccn3);
            setVisitedCountry(remainingCountry);
        }else{
            const newVisitedCountry = [...visitedContry, country]
            setVisitedCountry(newVisitedCountry);
        }
    }
    const handelvisitedFlag = (flags: string): void => {
        // console.log("visited flag: ", flags);
        if (visitedFlag.includes(flags)) {
            const remaingnewFlag = visitedFlag.filter(f => f !== flags);
            setVisitedFlag(remaingnewFlag);
        } else {
            const newVisitedFlag = [...visitedFlag, flags];
            setVisitedFlag(newVisitedFlag);
        }

    }

    return (
        <div>
            <h3>countries: {countries.length} </h3>
            <h4>Visited Country: {visitedContry.length} </h4>
            <div>
                <ul>
                    {
                        visitedContry.map((country) => <li key={country.ccn3.ccn3} >{country.name.common}</li>)
                    }
                </ul>
            </div>
            <h4>Visited flag: {visitedFlag.length} </h4>
            <div className="flag-img">
                {
                    visitedFlag.map((flag,idx) => <img key={idx} src={flag} alt="" /> )
                }
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handelVisitedCountry={handelVisitedCountry}
                        handelvisitedFlag={handelvisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    )
}