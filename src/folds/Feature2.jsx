import React from 'react';
import Heading from '../components/Heading';
import FeatureBox from '../components/FeatureBox';

const data = {
    heading: 'Elevating Card Programs with Cutting-Edge Technology',
    text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'Compare all Pro features',
};
const Columns = [
    {
        img: 'globe.svg',
        heading: 'Globally Accepted',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
    },
    {
        img: 'key.svg',
        heading: 'Biometric Integrated',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
    },
    {
        img: 'lock.svg',
        heading: 'Fully Secured',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
    },
];

const Feature2 = () => {
    return (
        <div className='my-24'>
            <div className='md:mt-24 md:mb-12 max-sm:my-16'>
                <Heading props={data} />
            </div>
            <div className='w-24'></div>
            <div className='mx-8 flex justify-between gap-8 max-sm:flex-col max-lg:flex-col'>
                <img src='/i1.png' alt='img' className='lg:w-1/2' />
                <img src='/i2.png' alt='img' className='lg:w-1/2' />
            </div>
        </div>
    );
};

export default Feature2;
