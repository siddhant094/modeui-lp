import React from 'react';
import Card from '../components/Card';

const Columns = [
    {
        heading: '2 Million',
        title: 'Customers',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        heading: '1K',
        title: 'Downloads',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        heading: '$73 Million',
        title: 'Transaction',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        heading: '2.0',
        title: 'Latest Version',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
];

const Testimonials = () => {
    return (
        <div>
            <div className='flex gap-8 my-24'>
                {Columns.map((item) => {
                    return <Card props={item} />;
                })}
            </div>
            <div className='flex flex-col my-24 items-center p-8'>
                <img
                    src='/c-logo.svg'
                    alt='company logo'
                    className='w-24 h-6 mb-8'
                />
                <span className='mb-12 text-center text-[#24282F] text-3xl w-3/4 font-[510] font-[Manrope]'>
                    I had the pleasure of experiencing the next generation of
                    card solutions with this incredible product. It's refreshing
                    to see such innovation in the financial industry.
                </span>
                <div className='flex flex-col items-center'>
                    <img src='/Avatar.svg' alt='Avatar' className='mb-4' />
                    <span className='text-center text-[#121417] font-medium mb-1'>
                        Nick Babich
                    </span>
                    <span className='text-center text-[#5A6475]'>
                        Lead Designer
                    </span>
                    <div className='flex gap-3 mt-3'>
                        <img src='/Star.svg' alt='Star' />
                        <img src='/Star.svg' alt='Star' />
                        <img src='/Star.svg' alt='Star' />
                        <img src='/Star.svg' alt='Star' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
