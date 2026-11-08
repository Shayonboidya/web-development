"use client"
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { IBook } from '../Type';

const ListedBooksPage = () => {
    const { readBooks, wishList } = useContext(BooksContext) as { readBooks: IBook[], wishList: IBook[] };
    // console.log(readBooks);
    return (
        <div className='container mx-auto'>
            <div className='bg-slate-100 rounded-2xl mt-10 font-bold text-4xl text-center p-10'>Books</div>
            <p>read books</p>
            {
                readBooks.map((readbook, index) => <p key={index}>{readbook.bookName}</p>)
            }
            <p>Wish list books</p>
            {
                wishList.map((wl, index) => <p key={index}>{wl.bookName}</p>)
            }
        </div>
    );
};

export default ListedBooksPage;