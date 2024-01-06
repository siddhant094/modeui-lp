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
        <div>
            <div className='my-24'>
                <Heading props={data} />
            </div>
            <div className='w-24'></div>
            {/* <div className='flex flex-row  justify-between'>
                {Columns.map((item) => {
                    return <FeatureBox props={item} />;
                })}
            </div> */}
            <div className='mx-8 flex justify-between gap-8'>
                <img src='/i1.png' alt='img' className='w-1/2' />
                <img src='/i2.png' alt='img' className='w-1/2' />
            </div>
        </div>
    );
};

export default Feature2;