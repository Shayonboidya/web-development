import type { Dispatch, SetStateAction } from "react";

export interface Iplayer {
    playerName: string,
    playerImg: string,
    origin: string,
    playerType: string,
    bolwingStyle: string,
    playerPrice: number;
    rating: number;
}
export interface IplayerType {
    playesPromice: Promise<Iplayer[]>
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
}
export interface IaviablePlayersCoin {
    playes: Iplayer[]
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
}
export interface IplayerCardCoin {
    player: Iplayer
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
}
export interface ISelectedPlayers {
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
    
}
export interface ISelectedPlayerCard {
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
    player: Iplayer;
}