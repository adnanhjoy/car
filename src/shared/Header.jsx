'use client'
import MobileNav from '@/components/header/MobileNav';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className='bg-primary'>
            <div className='container mx-auto'>
                <div className='p-5 flex items-center justify-between'>
                    <span className='uppercase text-white flex items-center font-semibold text-xl gap-2'>
                        <h1 className='text-info'>Auto</h1>
                        <h1>vehicles</h1>
                    </span>

                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-4 uppercase text-white'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href=''>About</Link></li>
                            <li><Link href=''>Vehicles</Link></li>
                            <li><Link href=''>Services</Link></li>
                            <li><Link href=''>Latest</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </nav>

                    <button className='md:hidden' onClick={() => setNavOpen(!navOpen)}>
                        {
                            navOpen ? <IoMdClose className='text-white text-2xl' /> :
                                <FaBars className='text-white text-2xl' />
                        }
                    </button>
                </div>
            </div>
            {
                navOpen ? <MobileNav /> : ''
            }
        </div>
    );
};

export default Header;