import type { Dispatch, SetStateAction } from "react";

export interface Itechnology {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: string
}
export interface ItechnologieCard {
    technology: Itechnology,
    stack: Itechnology[];
    setStack: Dispatch<SetStateAction<Itechnology[]>>;

}


export interface ItechnologiesPromiceType {
    technologiesPromice: Promise<Itechnology[]>
}
export interface ItechnologiesDataType {
    technologiesData: Itechnology[];
    stack: Itechnology[];
    setStack: Dispatch<SetStateAction<Itechnology[]>>;
}

export interface ItechnologyStack {
    stack: Itechnology[];
    setStack: Dispatch<SetStateAction<Itechnology[]>>;
    
}
export interface ItechnologyStackCard{
    techonology : Itechnology;
    stack: Itechnology[];
    setStack: Dispatch<SetStateAction<Itechnology[]>>;
}
export interface IsocialMediaLink{
    name:string;
    link:string;
}