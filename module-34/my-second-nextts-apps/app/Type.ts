export interface IFood {
    id:string;
    dish_name : string;
    category:string;
    rating:number;
    price:number;
    cuisine: string;
    origin_and_popularity: string;
    image_link: string;
}
export interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
}