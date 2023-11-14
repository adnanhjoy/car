'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCard from '@/components/card/CarCard';
import { settings } from '@/utilitis/carousel.config';

const FeaturedCars = () => {
 
    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-xl font-semibold text-info mb-5 mx-4 md:mx-0'>Featured Cars</h2>
            <Slider {...settings}>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </Slider>
        </div>
    );
};

export default FeaturedCars;