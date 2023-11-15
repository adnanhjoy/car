'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import car1 from '../../../public/assets/car1.png'
import car2 from '../../../public/assets/car2.png'
import car3 from '../../../public/assets/car3.png'
import car4 from '../../../public/assets/car4.jpg'


const HeroSlider = () => {
    const [imageChange, setImageChange] = useState([car1, car2, car3, car4]);

    const handleImageChnage = (img) => {
        setImageChange(img)
    }
    const settings = {
        fade: true,
        infinite: true,
        speed: 4000,
        autoplaySpeed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <></>,
        nextArrow: <></>,
    };
    return (
        <div className='container mx-auto'>
            <div className='flex items-center gap-x-4'>
                <div className='w-1/5 hidden md:block'>
                    {
                        imageChange?.map(image =>
                            <Image
                                key={image}
                                height={1000}
                                width={1000}
                                src={image}
                                className='w-full h-[6.375rem] mb-2' 
                                style={{backgroundColor:'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)'}}/>)
                    }
                </div>
                <div className='w-full md:w-4/5'>
                    <Slider {...settings}>
                        {
                            imageChange?.map(image =>
                                <Image
                                    key={image}
                                    height={1080}
                                    width={1920}
                                    src={image}
                                    className='w-full h-[12rem] md:h-[27rem] mb-2' />)
                        }
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default HeroSlider;