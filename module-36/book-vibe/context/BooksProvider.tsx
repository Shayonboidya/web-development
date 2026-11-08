"use client"

import React, { useState } from 'react';
import { createContext } from 'react';

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [readBooks, setReadBooks] = useState<string[]>([]);
    const [wishList, setWishList] = useState<string[]>([]);

    const shareData = {
        readBooks, setReadBooks, wishList, setWishList
    }

    return <BooksContext.Provider value={shareData}>
        {children}

    </BooksContext.Provider>
};

export default BooksProvider;