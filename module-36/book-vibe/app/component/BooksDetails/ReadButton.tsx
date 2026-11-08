"use client"

import { IBook } from '@/app/Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ReadButton = ({ book }: { book: IBook }) => {
    const { readBooks, setReadBooks } = useContext(BooksContext) as {
        readBooks: IBook[];
        setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    const handelClick = () => {
        // console.log("Read books button");
        // setReadBooks((prev: IBook[]) => [...prev, book]);
        setReadBooks([...readBooks, book]);
    }
    return <button className="btn btn-soft btn-info" onClick={() => handelClick()}>Read</button>;

};

export default ReadButton;