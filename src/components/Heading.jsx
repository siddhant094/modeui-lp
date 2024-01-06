import React from 'react';

const Heading = ({ props }) => {
    // console.log(props);
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center items-center max-w-lg'>
                <div className='font-[Manrope] text-[#121417] font-semibold text-4xl text-center mb-4'>
                    {props.heading}
                </div>
                <div className='text-center mb-8 text-[#5A6475]'>
                    {props.text}
                </div>
                <button className='text-center text-[#582066] hover:underline font-semibold flex gap-2'>
                    {props.link}{' '}
                    <span class='material-symbols-outlined text-base hover:no-underline'>
                        arrow_forward
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Heading;
