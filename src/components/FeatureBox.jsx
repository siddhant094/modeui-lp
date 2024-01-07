import React from 'react';

const FeatureBox = ({ props }) => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center w-80 max-sm:p-4'>
            <div className='rounded-full bg-[#F4EFF6] max-w-fit p-3'>
                <img src={`/${props.img}`} alt='icon' />
            </div>
            <div className='text-center font-medium'>{props.heading}</div>
            <div className='text-center font-medium text-sm text-[#5A6475]'>
                {props.text}
            </div>
        </div>
    );
};

export default FeatureBox;
