import React from 'react';

const FooterList = ({ props }) => {
    console.log(props);
    return (
        <div className='flex flex-col w-44'>
            <span className='font-bold text-[#24282F] mb-6'>
                {props.heading}
            </span>
            <div className='flex flex-col gap-4'>
                {props.list.map((item) => {
                    return (
                        <span className='text-[#363C46] font-medium'>
                            {item}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default FooterList;
