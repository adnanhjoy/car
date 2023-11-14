import Footer from '@/shared/Footer';
import Header from '@/shared/Header';
import React from 'react';

const Main = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Main;