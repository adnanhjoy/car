import React from 'react';
import img from '../../../../public/assets/car2.jpg'
import img2 from '../../../../public/assets/car1.jpg'
import Image from 'next/image';

const AboutSection = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className="md:flex mx-4">
                <div className='w-full md:w-1/2 relative'>
                    <Image height={1920} width={1080} src={img} className="rounded-lg shadow-2xl w-3/4" />
                    <Image height={1920} width={1080} src={img2} className=" absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-full md:w-1/2 mt-16 md:mt-0'>
                    <p className='text-info font-bold'>About Us</p>
                    <h1 className="text-2xl md:text-5xl font-bold text-primary my-4">We are qualified & of experience in this field</h1>
                    <p className="py-3 md:py-6 text-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="bg-primary px-4 py-2 uppercase rounded-md text-white hover:bg-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;