'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandCard from '@/components/card/BrandCard';
import brand1 from '../../../../public/assets/brand1.svg'
import brand2 from '../../../../public/assets/brand2.png'
import brand3 from '../../../../public/assets/brand3.jpg'
import brand4 from '../../../../public/assets/brand4.png'
import brand5 from '../../../../public/assets/brand5.png'

const PopularBrands = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5]

    const settings = {
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <></>,
        nextArrow: <></>,
    };
    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-xl font-semibold text-info mb-5'>Popular Brands</h2>
            <Slider {...settings}>
                {
                    brands?.map(brand =>
                        <BrandCard
                            key={brand}
                            brand={brand} />
                    )
                }
            </Slider>
        </div>
    );
};

export default PopularBrands;