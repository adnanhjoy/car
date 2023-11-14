import React from 'react';
import { BsTwitter } from 'react-icons/bs'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import blog from '../../public/assets/car3.jpg'

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-20 mx-5 md:mx-0'>
                    <div className='flex md:block flex-col justify-center items-center'>
                        <span className='uppercase text-white flex items-center font-semibold text-xl gap-2'>
                            <h1 className='text-info'>Auto</h1>
                            <h1>vehicles</h1>
                        </span>
                        <p className='text-white my-5 text-center md:text-start'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante oremque esse quam molestiae Lorem ipsum dolor sit met, connect elit, sed. to eaningful results</p>

                        <span className='flex items-center gap-2 mt-2'>
                            <Link href=''><BiLogoFacebook className="bg-[#3C599F] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                            <Link href=''><BiLogoLinkedin className="bg-[#0085AE] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                            <Link href=''><BsTwitter className="bg-[#32CCFE] text-4xl rounded-full text-white border-none p-1.5" /></Link>
                        </span>
                    </div>

                    <div className='md:flex justify-between text-center md:text-start'>
                        <div className='w-full md:w-1/2'>
                            <h2 className='text-white text-xl font-medium'>Brands</h2>
                            <ul className='text-white mt-5'>
                                <li><Link className='hover:text-primary' href=''>BMW</Link></li>
                                <li><Link className='hover:text-primary' href=''>Mercedes Benz</Link></li>
                                <li><Link className='hover:text-primary' href=''>Audi</Link></li>
                                <li><Link className='hover:text-primary' href=''>Alfa Romeo</Link></li>
                                <li><Link className='hover:text-primary' href=''>Lamborghini</Link></li>
                                <li><Link className='hover:text-primary' href=''>Dodge</Link></li>
                                <li><Link className='hover:text-primary' href=''>Cadillac</Link></li>
                            </ul>
                        </div>
                        <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                            <h2 className='text-white text-xl font-medium'>Popular Cars</h2>
                            <ul className='text-white mt-5'>
                                <li><Link className='hover:text-primary' href=''>Toyota Corolla</Link></li>
                                <li><Link className='hover:text-primary' href=''>Honda Civic</Link></li>
                                <li><Link className='hover:text-primary' href=''>Honda CR-V</Link></li>
                                <li><Link className='hover:text-primary' href=''>Tesla Model Y</Link></li>
                                <li><Link className='hover:text-primary' href=''>Opel Corsa</Link></li>
                                <li><Link className='hover:text-primary' href=''>Maruti Swift</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-white text-xl font-medium text-center md:text-start'>Recent Blogs</h2>

                        <div className='flex items-center gap-2 rounded-md mt-5 cursor-pointer hover:text-primary'>
                            <Image height={100} width={100} src={blog} />
                            <p className='text-white line-clamp-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante oremque esse quam molestiae Lorem ipsum dolor sit </p>
                        </div>
                        <div className='flex items-center gap-2 rounded-md mt-5 cursor-pointer hover:text-primary'>
                            <Image height={100} width={100} src={blog} />
                            <p className='text-white line-clamp-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante oremque esse quam molestiae Lorem ipsum dolor sit </p>
                        </div>
                    </div>
                </div>
                <div className='py-5 border-t border-t-white'>
                    <p className='text-white text-center text-sm'>©2023 Education . All rights reserved | Education</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;