"use client"

import { IBook } from '@/app/Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ReadButton = ({ book }: { book: IBook }) => {
    const { readBooks, setReadBooks } = useContext(BooksContext) as {
        readBooks: IBook[];
        setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    const handelClickToRead = () => {
        // console.log("Read books button", book);
        // console.log("Read books button", readBooks);
        // setReadBooks((prev: IBook[]) => [...prev, book]);
        setReadBooks([...readBooks, book]);

        // const hasBookAlrady = readBooks.find((readBook) => readBook === book);
        // if(!hasBookAlrady){
        //     setReadBooks([...readBooks, book]);
        // }else{
        //     alert("Alrady added")
        // }

    }
    return <button className="btn btn-soft btn-info" onClick={() => handelClickToRead()}>Read</button>;

};

export default ReadButton;