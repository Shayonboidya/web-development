import { useState } from "react";
import logo from '../../assets/logo-text.png'
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        "Home",
        "Technologies",
        "Projects",
        "About",
        "Contact",
    ];

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-15 items-center justify-between">
                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 border border-gray-300 rounded-lg lg:hidden">
                        {
                            isOpen ? <FaTimes /> : <GiHamburgerMenu />

                        }
                    </button>
                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-32 object-contain sm:w-36"
                    />

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="font-medium text-gray-600 transition-colors hover:text-red-400"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="items-center gap-3 flex">
                        <button className="rounded-4xl border border-gray-300 lg:px-5 px-3 py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
                            Sign In
                        </button>
                        <button className="rounded-4xl bg-red-400 lg:px-5 px-3 py-2 font-semibold text-white transition hover:bg-red-500">
                            Sign Up
                        </button>

                    </div>



                </div>
                {
                    isOpen && (
                        <div className="border-t border-gray-200 p-4 lg:hidden">
                            <ul className="flex flex-col gap-1 ">
                                {
                                    navLinks.map((link) => (
                                        <li key={link}>
                                            <a href={`#${link.toLowerCase()}`}
                                                onClick={() => setIsOpen(false)}
                                                className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-red-600"
                                            >{link}</a>

                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                    )
                }

            </div>
        </nav>
    );
};

export default Nav;
