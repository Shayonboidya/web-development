// import React from 'react';
import Logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav className='bg-red-100'>
        <div className='flex justify-between container mx-auto'>
            <img src={Logo} alt="" />

            <ul className='flex gap-4 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedule</li>
            </ul>
            </div>
        </nav>
    );
};

export default Nav;