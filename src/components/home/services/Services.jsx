import React from 'react';
import { FaCarSide, FaGift } from 'react-icons/fa';
import { GiHiveMind } from 'react-icons/gi';
import { SlLike } from "react-icons/sl";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const Services = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                <div className='text-center mt-32'>
                    <p className='text-info font-bold tracking-widest uppercase'>OUR SERVICES</p>
                    <h1 className='text-2xl font-semibold text-secondary my-3'>Why Choose Us</h1>
                    <p className='text-dark'>Whatever the reason, our full detail will make you want to get in and go for a drive.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start my-20 gap-8 md:gap-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='bg-secondary h-32 w-32 rounded-full hover:bg-info flex items-center justify-center'>
                            <SlLike className='text-white text-5xl' />
                        </span>
                        <p className='text-center mt-4 text-secondary font-medium text-sm'>CONVENIENCE & FLEXIBILITY</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='bg-secondary h-32 w-32 rounded-full hover:bg-info flex items-center justify-center'>
                            <FaCarSide className='text-white text-5xl' />
                        </span>
                        <p className='text-center mt-4 text-secondary font-medium text-sm'>ECO-FRIENDLY QUALITY</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='bg-secondary h-32 w-32 rounded-full hover:bg-info flex items-center justify-center'>
                            <FaGift className='text-white text-5xl' />
                        </span>
                        <p className='text-center mt-4 text-secondary font-medium text-sm'>LOYALTY REWARDS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='bg-secondary h-32 w-32 rounded-full hover:bg-info flex items-center justify-center'>
                            <GiHiveMind className='text-white text-5xl' />
                        </span>
                        <p className='text-center mt-4 text-secondary font-medium text-sm'>PEACE OF MIND</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='bg-secondary h-32 w-32 rounded-full hover:bg-info flex items-center justify-center'>
                            <HiWrenchScrewdriver className='text-white text-5xl' />
                        </span>
                        <p className='text-center mt-4 text-secondary font-medium text-sm'>100% SATISFACTION GUARANTEED</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;