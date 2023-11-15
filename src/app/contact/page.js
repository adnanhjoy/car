import ContactForm from '@/components/contact/ContactForm';
import ContactSideComponent from '@/components/contact/ContactSideComponent';
import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='contact-bg'>
                <div >
                    <h1 className='text-3xl font-semibold text-white uppercase py-16 md:py-24 text-center tracking-widest'>Contact Us</h1>
                </div>
            </div>

            <div className='container mx-auto my-14'>
                <div className='mx-4 md:mx-0 md:flex items-start gap-10 bg-white p-4 md:p-8 rounded-md'>
                    <div className='md:w-2/5'>
                        <ContactSideComponent />
                    </div>
                    <div className='md:w-3/5'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;