import Image from 'next/image';
import React from 'react';
import footerLogo from '@/assets/logo.png';
import Link from 'next/link';

const Footer = () => {
    return (

        <footer className="w-full border-t border-white/10 bg-gray-950 px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">

                {/* Logo & Brand */}
                <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-2 transition-opacity duration-300 hover:opacity-80"
                >
                    <Image
                        src={footerLogo}
                        alt="FITLOG logo"
                        width={36}
                        height={36}
                        className="h-5 w-5 object-contain sm:h-9 sm:w-9"
                    />

                    <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                        FIT<span className="text-green-500">LOG</span>
                    </span>
                </Link>

                {/* Copyright */}
                <div className="text-center sm:text-right">
                    <p className="text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
                        © 2026 <span className="font-semibold text-gray-300">FITLOG</span>
                        {" "}All rights reserved. Workout Library. Train hard, log honest.
                    </p>


                </div>

            </div>
        </footer>

    );
};

export default Footer;