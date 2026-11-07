import BookCard from '@/app/components/BookCard';
import { Ibook } from '@/app/Type';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/books");
    const books: Ibook[] = await res.json();
    return books.map(book => (
        { BookId: book.id }
    ))
}


const BookId = async ({ params }: { params: Promise<{ bookId: string }> }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const book: Ibook = await res.json();
    return (
        <div>
            <h3>{bookId}</h3>
            <div>
                <BookCard book={book}></BookCard>
            </div>
        </div>
    );
};

export default BookId;