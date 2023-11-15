import Link from 'next/link';
import React from 'react';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from 'react-icons/md';

const ContactSideComponent = () => {
    return (
        <div className='bg-primary p-10 rounded-md md:w-4/5'>
            <span className='uppercase text-white flex items-center font-semibold text-xl gap-2 justify-center'>
                <h1 className='text-info'>Auto</h1>
                <h1>vehicles</h1>
            </span>

            <div className='mt-5'>
                <div className='flex items-start gap-2'>
                    <MdCall className='text-white text-xl mt-1' />
                    <span>
                        <p className='text-info'>Need I help? Talk to an Expert</p>
                        <p className='text-white'>+008 1772781540</p>
                    </span>
                </div>
                <div className='flex items-start gap-2 mt-5'>
                    <MdEmail className='text-white text-xl mt-0.5' />
                    <span>
                        <p className='text-info'>Email</p>
                        <p className='text-white'>example@gmail.com</p>
                    </span>
                </div>
                <div className='flex items-start gap-2 mt-5'>
                    <FaLocationDot className='text-white text-xl mt-1' />
                    <span>
                        <p className='text-info'>Address</p>
                        <p className='text-white'>Adept KR Complex (2nd floor)</p>
                    </span>
                </div>

                <div className='flex items-center justify-center md:justify-start gap-2 mt-10'>
                    <Link href=''><BiLogoFacebook className="bg-[#3C599F] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                    <Link href=''><BiLogoLinkedin className="bg-[#0085AE] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                    <Link href=''><BsTwitter className="bg-[#32CCFE] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                </div>
            </div>
        </div>
    );
};

export default ContactSideComponent;