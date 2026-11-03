"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navber = () => {
    const pathName = usePathname();
    const navBerlinks = <>
        <li className={pathName === `/about` ? `text-purple-800` : ''}><Link href={`/about`}>about</Link></li>
        <li className={pathName === `/about/developer` ? `text-purple-800` : ''}><Link href={`/about/developer`}>developer</Link></li>
        <li className={pathName === `/users` ? `text-purple-800`:''}><Link href={`/users`}>users</Link></li>
        <li className={pathName === `/about/designer` ? `text-purple-800`:''}><Link href={`/about/designer`}>designer</Link></li>
        <li className={pathName === `/dashbord` ? `text-purple-800`:''}><Link href={`/dashbord`}>Dashbord</Link></li>

    </>
    return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navBerlinks}

                </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navBerlinks}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
);
};

export default Navber;