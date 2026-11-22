"use client"
import { InavLinks } from '@/app/Type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MobailManu = ({ navLinks }: { navLinks: InavLinks[] }) => {
    const pathName = usePathname();
    return (
        <div className="dropdown dropdown-start lg:hidden">
            <div
                tabIndex={0}
                role="button"
                aria-label="Open navigation menu"
                className="btn btn-ghost btn-circle btn-sm sm:btn-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>

            <ul
                tabIndex={0}
                className="menu dropdown-content z-[60] mt-4 w-56 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
            >
                {navLinks.map((navLink) => (

                    <li key={navLink.name}>
                        <Link
                            href={navLink.link}
                            className={`
            block rounded-xl px-4 py-3
            text-sm font-semibold
            transition-all duration-300 ease-in-out
            ${pathName === navLink.link
                                    ? "bg-green-100 text-green-700 shadow-sm"
                                    : "text-gray-800 hover:bg-green-50 hover:text-green-700"
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

export default MobailManu;