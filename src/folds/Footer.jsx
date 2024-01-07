import React from 'react';
import FooterList from '../components/FooterList';

const List = [
    {
        heading: 'Company',
        list: ['About us', 'Pricing', 'Contact us', 'Features'],
    },
    {
        heading: 'Product',
        list: ['Figma design system', 'Ios kit', 'Android kit', 'Wireframe'],
    },
    {
        heading: 'Resources',
        list: ['Templates', 'Landing pages', 'Documentation', 'Comp library'],
    },
    {
        heading: 'Legal',
        list: [
            'Privacy policy',
            'Terms & Conditions',
            'Disclaimer',
            'Affiliate programme',
        ],
    },
    {
        heading: 'Support',
        list: ['Help centre', 'Raise ticket', 'Report', 'Refund'],
    },
];

const Footer = () => {
    return (
        <div className='lg:px-20 max-sm:px-4 lg:pt-24 max-sm:pt-12 pb-10 ftr-border'>
            <div className='flex flex-col lg:items-center max-sm:items-start lg:pb-16 max-sm:pb-8 border-b-[1px] border-[#F1F1F2]'>
                <img src='/ModeUI.svg' alt='Mode UI' />
                <span className='font-medium text-[#5A6475] lg:text-center mt-4 lg:w-3/5'>
                    Mode UI is a comprehensive design system that empowers
                    designers and developers to create cohesive and visually
                    stunning user interfaces across various platforms and
                    devices
                </span>
            </div>
            <div className='lg:pt-16 lg:pb-24 max-sm:py-8 max-sm:gap-8 flex max-sm:flex-col lg:flex-row justify-between'>
                {List.map((item) => {
                    return <FooterList props={item} />;
                })}
            </div>
            <div>
                <div className='flex gap-6 justify-center mb-8 max-sm:justify-start'>
                    <img src='/Social1.svg' alt='Social' />
                    <img src='/Social2.svg' alt='Social' />
                    <img src='/Social3.svg' alt='Social' />
                </div>
                <div className='text-center text-[#5A6475] text-sm max-sm:text-left'>
                    © 2023 Mode UI Inc. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
