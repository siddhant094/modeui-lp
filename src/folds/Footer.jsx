import React from 'react';

const List = [
    {
        heading: 'Com',
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
            <div className='pt-16 pb-24'></div>
            <div>Box3</div>
        </div>
    );
};

export default Footer;
