import React from 'react';

const CallToAction = () => {
    return (
        <div className='flex flex-col py-24 items-center'>
            <span className='text-[#121417] text-center font-semibold text-4xl font-[Manrope] w-9/12'>
                Unlock Limitless Possibilities with Our New Card Solutions
            </span>
            <div className='flex gap-2 mt-8'>
                <button className='bg-[#582066] py-2 px-4 text-white flex items-center gap-2 rounded-lg'>
                    Unlock your card{' '}
                    <span class='material-symbols-outlined'>credit_card</span>
                </button>
                <button className='bg-[#EEEFEF] py-2 px-4 text-[#5A6475] font-medium flex items-center gap-2 rounded-lg'>
                    Customer support{' '}
                    <span class='material-symbols-outlined'>headphones</span>
                </button>
            </div>
        </div>
    );
};

export default CallToAction;
