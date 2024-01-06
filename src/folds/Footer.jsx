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
        <div className='px-20 pt-24 pb-10 ftr-border'>
            <div className='flex flex-col items-center pb-16 border-b-[1px] border-[#F1F1F2]'>
                <img src='/ModeUI.svg' alt='Mode UI' />
                <span className='font-medium text-[#5A6475] text-center mt-4 w-3/5'>
                    Mode UI is a comprehensive design system that empowers
                    designers and developers to create cohesive and visually
                    stunning user interfaces across various platforms and
                    devices
                </span>
            </div>
            <div className='pt-16 pb-24 flex justify-between'>
                {List.map((item) => {
                    return <FooterList props={item} />;
                })}
            </div>
            <div>
                <div className='flex gap-6 justify-center mb-8'>
                    <img src='/Social1.svg' alt='Social' />
                    <img src='/Social2.svg' alt='Social' />
                    <img src='/Social3.svg' alt='Social' />
                </div>
                <div className='text-center text-[#5A6475] text-sm'>
                    © 2023 Mode UI Inc. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
