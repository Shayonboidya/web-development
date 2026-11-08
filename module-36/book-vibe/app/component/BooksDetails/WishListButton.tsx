"use client"

import { IBook } from '@/app/Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const WishListButton = ({ book }: { book: IBook }) => {
    const { wishList, setWishList } = useContext(BooksContext) as {
        wishList: IBook[];
        setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
    };


    const handelClickToWishList = () => {
        setWishList([...wishList, book]);
    }
    console.log("wishList", wishList);

    return (
        <button className="btn btn-soft btn-accent" onClick={() => handelClickToWishList()}>Wish List</button>
    );
};

export default WishListButton;