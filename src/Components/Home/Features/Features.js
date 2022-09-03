import React from 'react';
import banner from "../../../Images/about-images.jpg";
import banner2 from "../../../Images/about-1.jpg";
import banner3 from "../../../Images/about-2.jpg";
import banner4 from "../../../Images/about-3.jpg";

const Features = () => {
    return (
        <div className='md:p-12'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='md:p-5'>
                    <img src={banner} alt="" />
                </div>
                <div className='p-5'>
                    <h2 className='sm:text-2xl md:text-5xl font-bold mb-2'>Best Adventure <br /> Tourer Bikes Parts</h2>
                    <p className='mb-5'>a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourceand going through.</p>
                    <div className='parts grid grid-cols-3 gap-4'>
                        <img className='w-auto' src={banner2} alt="" />
                        <img className='w-auto' src={banner3} alt="" />
                        <img className='w-auto' src={banner4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;