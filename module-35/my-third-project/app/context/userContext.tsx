"use client"
import React from 'react';
import { createContext } from 'react';

export const UserContext = createContext<string | null>(null)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserContext.Provider value="tomato">
            {children}
        </UserContext.Provider >
    );
};

export default UserProvider;