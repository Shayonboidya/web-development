"use client"
import { InavLinks } from '@/app/Type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DesktopNavigation = ({ navLinks }: { navLinks: InavLinks[] }) => {

    const pathName = usePathname();

    return (
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1 xl:gap-3">

                {navLinks.map((navLink) => (

                    <li key={navLink.name}>
                        <Link
                            href={navLink.link}
                            className={`
            inline-flex items-center justify-center
            rounded-full px-5 py-2.5
            text-sm xl:text-base font-semibold
            transition-all duration-300 ease-in-out
            ${pathName === navLink.link
                                    ? "bg-green-100 text-green-700 shadow-sm"
                                    : "text-gray-100 hover:bg-green-50 hover:text-green-700"
                                }
        `}
                        >
                            {navLink.name}
                        </Link>
                    </li>

                ))}

            </ul>
        </div>
    );
};

export default DesktopNavigation;