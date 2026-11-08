"use client"

import React, { useState } from 'react';
import { createContext } from 'vm';

const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const shareData = {
        readBooks, setReadBooks, wishList, setWishList
    }

    return <BooksContext.Provider value={shareData}>
        {children}

    </BooksContext.Provider>
};

export default BooksProvider;