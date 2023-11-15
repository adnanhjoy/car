import Link from 'next/link';
import React from 'react';

const MobileNav = () => {
    return (
        <nav className='bg-secondary min-h-screen  ease-in-out transition duration-300'>
            <ul className='uppercase text-white text-center py-10'>
                <li className='my-2'><Link href='/'>Home</Link></li>
                <li className='my-2'><Link href=''>About</Link></li>
                <li className='my-2'><Link href=''>Vehicles</Link></li>
                <li className='my-2'><Link href=''>Services</Link></li>
                <li className='my-2'><Link href=''>Latest</Link></li>
                <li className='my-2'><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default MobileNav;