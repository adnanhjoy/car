import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <h1 className='text text-info uppercase font-semibold mb-8 text-3xl'>Get in Touch</h1>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div>
                        <label>Name</label>
                        <input type="text" className='block border border-dark outline-none w-full p-2 rounded-md mt-2 placeholder:font-thin' placeholder='Name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" className='block border border-dark outline-none w-full p-2 rounded-md mt-2 placeholder:font-thin' placeholder='Email' />
                    </div>
                </div>
                <div className='mt-8'>
                    <label>Message</label>
                    <textarea type="text" className='block border border-dark outline-none w-full p-2 rounded-md mt-2 placeholder:font-thin' placeholder='Message' />
                </div>
                <button className='bg-primary hover:bg-secondary px-4 py-2 rounded mt-8 text-white'>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;