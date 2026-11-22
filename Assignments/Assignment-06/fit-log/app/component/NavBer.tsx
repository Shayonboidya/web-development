
import Link from 'next/link';
import React, { Suspense } from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { NavLinksButton } from './navLinksButton';
import DesktopNavigation from './Navigation/DesktopNavigation';
import MobailManu from './Navigation/MobailManu';

const NavBer = () => {
    const navLinks = [
        { name: "Workouts", link: "/" },
        { name: "My Plan", link: "/my-plan" },
        // { name: "Excercise", link: "/excercise" },
    ];



    return (
        <header className="sticky top-0 z-50 w-full border-b border-base-300/70  shadow-sm backdrop-blur-xl">

            <div className="navbar mx-auto min-h-16 max-w-7xl px-3 sm:px-5 md:min-h-[76px] lg:px-8">

                {/* Navbar Start */}
                <div className="navbar-start gap-1">

                    {/* Mobile Menu */}
                    <Suspense fallback={<div className="lg:hidden h-10 w-10" />}>
                        <MobailManu navLinks={navLinks}></MobailManu>
                    </Suspense>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-1.5 sm:gap-2.5"
                    >
                        <Image
                            src={logo}
                            alt="FITLOG logo"
                            width={32}
                            height={32}
                            priority
                            className="h-5 w-5 object-contain sm:h-9 sm:w-9"
                        />

                        <span className="text-lg font-extrabold tracking-tight text-white sm:text-2xl">
                            FIT<span className="text-green-500">LOG</span>
                        </span>
                    </Link>

                </div>

                {/* Desktop Navigation */}
                <Suspense fallback={<div className="hidden lg:flex" />}>
                    <DesktopNavigation navLinks={navLinks}></DesktopNavigation>
                </Suspense>

                {/* Navbar End */}
                <NavLinksButton></NavLinksButton>


            </div>
        </header>
    );

};

export default NavBer;
