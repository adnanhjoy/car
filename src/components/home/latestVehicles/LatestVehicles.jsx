import CarCard from '@/components/card/CarCard';
import React from 'react';

const LatestVehicles = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                <div className='text-center mt-32'>
                    <p className='text-info font-bold tracking-widest uppercase'>Latest Vehicles</p>
                    <h1 className='text-2xl font-semibold text-secondary my-3'>Our Brand Products</h1>
                    <p className='text-dark'>We are working hard to brings new advanced design interfaces to Joomla and WordPress <br /> that both beginners and experts will fall in love</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        Array(12).fill().map((_, idx) =>
                            <CarCard
                                key={idx}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestVehicles;