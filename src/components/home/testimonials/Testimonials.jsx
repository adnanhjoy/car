'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from '@/components/card/TestimonialCard';
import { testimonialSettings } from '@/utilitis/carousel.config';

const Testimonials = () => {

    return (
        <div className='container mx-auto my-8'>
            <div className='text-center'>
                <p className='text-info font-bold tracking-widest uppercase'>Testimonial</p>
                <h1 className='text-2xl font-semibold text-secondary my-3'>What Customer Says</h1>
                <p className='text-dark'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='mt-8'>
                <Slider {...testimonialSettings}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;