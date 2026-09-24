import { SportsCard } from "./Sports_card";
import type { SportsType } from "./types";

const sports : SportsType[] = [
    {name : "football", players : 11},
    {name:"cricket" , players: 11},
    {name:"chess" , players: 2}

];
function Sports(){
    return(
        <div className="sport">
            {
                sports.map(sport => <SportsCard sport={sport}></SportsCard>)
            }           
        </div>
    )
}
export default Sports