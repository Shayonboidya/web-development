export interface IBookSmallCard {
    bookId: number
    bookName: string,
    author: string,
    image: string,

    totalPages: number,
    rating: number,
    category: string,
    tags: string[];

}



export interface IBookLargeCard {
    bookId: number
    bookName: string,
    author: string,
    image: string,
    totalPages: number,
    rating: number,
    category: string,
    tags: string[];
    review: string,
    publisher: string
    yearOfPublishing: number;
}