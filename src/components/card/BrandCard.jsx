'use client'
import Image from 'next/image';
import React from 'react';
import brand2 from '../../../public/assets/brand2.png'



const BrandCard = ({ brand }) => {
    return (
        <>
            <div className='bg-white p-4 rounded-md mx-2 hover:ring-1 my-4 hover:ring-info'>
                <Image
                    height={100}
                    width={100}
                    src={brand2}
                    className='w-16 h-16'
                />
                <div className='mt-4'>
                    <h1 className='text-secondary font-semibold'>Lamborghini</h1>
                    <p>(2)+</p>
                </div>
            </div>
        </>
    );
};

export default BrandCard;