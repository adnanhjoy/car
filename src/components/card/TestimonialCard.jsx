import Image from 'next/image';
import React from 'react';
import userImg from '../../../public/assets/user.jpg'
import { FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialCard = () => {
    return (
        <div className='my-4 mx-2 bg-white rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Image height={100} width={100} src={userImg} className='rounded-full h-16 w-16' />
                    <span>
                        <p className='text-secondary'>Adnan Hossain</p>
                        <p className='text-dark'><small>Business man</small></p>
                    </span>
                </div>
                <FaQuoteRight className='text-6xl mr-10 text-info opacity-30' />
            </div>
            <p className='text-dark mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

            <span className='flex items-center gap-1 mt-4'>
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
            </span>
        </div>
    );
};

export default TestimonialCard;