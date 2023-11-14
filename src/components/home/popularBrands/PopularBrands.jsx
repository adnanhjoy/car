'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandCard from '@/components/card/BrandCard';

const PopularBrands = () => {

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
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
            </Slider>
        </div>
    );
};

export default PopularBrands;