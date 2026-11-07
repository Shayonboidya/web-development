import React from 'react';
import BookCard from '../components/BookCard';
import { Ibook } from '../Type';
const booksPromice = async () => {
    // const res = await fetch("http://localhost:5000/books",{cache:"force-cache"});
    // const res = await fetch("http://localhost:5000/books",{cache:"no-store"});
    const res = await fetch("http://localhost:5000/books",
        {next:{revalidate:10}}//after 10 second refrash
    );
    if(!res.ok){
        throw new Error("Data is not fetching...");
    }
    return res.json();
}


const BooksPage = async () => {
    const books: Ibook[] = await booksPromice();

    return (
        <div className='container mx-auto'>
            {/* <h3>bookd:{books.length}</h3> */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;