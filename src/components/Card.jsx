import React from 'react';

const Card = ({ props }) => {
    return (
        <div className='flex flex-col py-4'>
            <div className='text-[#582066] font-[Manrope] font-semibold text-4xl text-center mb-4'>
                {props.heading}
            </div>
            <div className='text-[#121417] font-medium text-center mb-2'>
                {props.title}
            </div>
            <div className='text-center text-[#5A6475] text-base'>
                {props.text}
            </div>
        </div>
    );
};

export default Card;
