import type { SportsType } from "./types";

 export function SportsCard({sport}:{sport:SportsType}){
    return(
        <>
            <h3>Name: {sport.name}</h3>
            <h3>Player: {sport.players} </h3>
        </>
    )
}