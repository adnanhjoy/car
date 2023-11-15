import React from 'react';

const SearchSection = () => {
    return (
        <div className='container mx-auto bg-white p-4 rounded-md' style={{boxShadow:'0 0 10px #f9f9f9'}}>
            <form>
                <div className='flex items-center gap-4'>
                    <div className='w-1/2'>
                        <label className='block text-info font-medium'>Search Manually</label>
                        <input className='w-full p-2 border border-dark rounded outline-none placeholder:font-thin' placeholder='Search' type="text" />
                    </div>
                    <div className='w-1/5'>
                        <label className='block text-info font-medium'>Brand</label>
                        <select name="" id="" className='border border-dark p-2 rounded w-full outline-none'>
                            <option value="">Bmw</option>
                            <option value="">Lamborghini</option>
                        </select>
                    </div>
                    <div className='w-1/5'>
                        <label className='block text-info font-medium'>Model</label>
                        <select name="" id="" className='border border-dark p-2 rounded w-full outline-none'>
                            <option value="">Bmw</option>
                            <option value="">Lamborghini</option>
                        </select>
                    </div>
                    <div className='w-[10%]'>
                        <button className='bg-primary hover:bg-secondary px-4 py-2 rounded text-white uppercase mt-6 w-full'>Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchSection;