export interface Iplayer {
    playerName: string,
    playerImg: string,
    origin: string,
    playerType: string,
    bolwingStyle: string,
    playerPrice: number;
    rating: number;
}
export interface playerType {
    playesPromice: Promise<Iplayer[]>
}