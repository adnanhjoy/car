'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCard from '@/components/card/CarCard';

const FeaturedCars = () => {
    const settings = {
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <></>,
        nextArrow: <></>,
    };
    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-xl font-semibold text-info mb-5'>Featured Cars</h2>
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