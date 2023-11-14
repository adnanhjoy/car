'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandCard from '@/components/card/BrandCard';
import { settings } from '@/utilitis/carousel.config';

const PopularBrands = () => {


    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-xl font-semibold text-info mb-5 mx-4 md:mx-0'>Popular Brands</h2>
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