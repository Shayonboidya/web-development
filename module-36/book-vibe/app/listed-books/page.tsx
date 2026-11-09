"use client"
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { IBook } from '../Type';
import WishListBooksComponet from '../component/listed-books/WishListBooksComponet';
import ReadBooksComponent from '../component/listed-books/ReadBooksComponent';

const ListedBooksPage = () => {
    const { readBooks, wishList } = useContext(BooksContext) as { readBooks: IBook[], wishList: IBook[] };
    // console.log(readBooks);
    return (
        <div className='container mx-auto'>
            <div className='bg-slate-100 rounded-2xl my-10  font-bold text-4xl text-center p-10'>Books</div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Reads Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        readBooks.length > 0 ?
                            readBooks.map(book => <ReadBooksComponent key={book.bookId} book={book}></ReadBooksComponent>)
                            : <p className='text-center text-slate-400'>Not Books found</p>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishList.length > 0 ?
                            wishList.map(book => <WishListBooksComponet key={book.bookId} book={book}></WishListBooksComponet>) : <p className='text-center text-slate-400'>Not Books found</p>
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooksPage;