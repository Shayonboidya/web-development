// import React from 'react';
import { AiTwotoneDollarCircle } from 'react-icons/ai';
import Logo from '../assets/logo.png'

const Nav = ({ coin }: { coin: number }) => {
    return (
        <nav className='bg-red-100'>
            <div className='flex justify-between container mx-auto'>
                <img src={Logo} alt="" />

                <ul className='flex gap-4 items-center'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedule</li>
                    <li className='flex  gap-2 items-center border-2 px-3 py-1 font-bold bg-amber-50 rounded-2xl'>{coin} Coin <AiTwotoneDollarCircle /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;