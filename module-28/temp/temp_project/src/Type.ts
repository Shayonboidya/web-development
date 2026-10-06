
export interface ProfileCardType{
    name: string;
    age:number;
    favoriteHobby : string
}



export interface Person{
    name: string;
    age : number;
    selary:number
}
export interface StudentType{
    name: string;
    department?: string;
    university?: string;
    status?:boolean;
}

export interface UserCardType{
    id ?: number;
    userName?:string;
    name : string;
    email?:string;
}

export interface CommentsUserType{
    postId?:number;
    name :string;
    email?:string;
    body?:string;
}