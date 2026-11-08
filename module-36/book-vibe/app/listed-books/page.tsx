"use client"
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { IBook } from '../Type';

const ListedBooksPage = () => {
    const { readBooks } = useContext(BooksContext) as { readBooks: IBook[] };
    console.log(readBooks);
    return (
        <div>
            <h3>listed books hare </h3>
            {
                readBooks.map((readbook, index) => <p key={index}>{readbook.bookName}</p>)
            }
        </div>
    );
};

export default ListedBooksPage;