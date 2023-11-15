import Image from 'next/image';
import React from 'react';
import { FcEngineering } from 'react-icons/fc'
import { GiGearStickPattern } from 'react-icons/gi'
import { PiRoadHorizonFill } from 'react-icons/pi'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'
import img from '../../../public/assets/car1.jpg'

const CarCard = () => {
    return (
        <div className='mx-2 bg-white rounded-md my-4 border border-gray-300 hover:ring-1 hover:ring-info' style={{ boxShadow: '0 0 10px #f9f9f9' }}>
            <div>
                <Image height={1080} width={1920} src={img} className='w-full h-48' />
            </div>
            <div className='p-2'>
                <h3 className='text-dark text-sm font-medium'>Toyota</h3>
                <h3 className='text-dark text-lg font-medium'>Noah</h3>
                <h3 className='text-dark'>Category: Used </h3>
                <h3 className='text-dark'>Model Year: 2005 </h3>
                <p className='font-semibold text-primary'>3,550,000.00 <span className='font-[auto]'>৳</span></p>
                <div className='mt-2 grid grid-cols-2 items-center justify-between gap-4'>
                    <span className='flex items-center gap-2'>
                        <FcEngineering className='text-info' />
                        <p className='text-dark text-sm'>2000 cc</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <GiGearStickPattern className='text-info' />
                        <p className='text-dark text-sm'>Automatic</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <PiRoadHorizonFill className='text-info' />
                        <p className='text-dark text-sm'>6300 km</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <MdAirlineSeatReclineExtra className='text-info' />
                        <p className='text-dark text-sm'>7 Persons</p>
                    </span>
                </div>
            </div>
            <button className="bg-primary px-4 py-2 uppercase rounded-b-md text-white text-sm hover:bg-secondary w-full">Buy now</button>
        </div>
    );
};

export default CarCard;