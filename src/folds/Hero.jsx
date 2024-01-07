import React from 'react';
// import './App.css';

const Hero = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-mesh mt-16 max-sm:mt-12'>
                <span className='text-center text-[#582066] font-semibold mt-8 max-sm:mt-4'>
                    Seamless experience
                </span>
                <span className='mt-4 font-semibold font-[Manrope] text-6xl max-sm:text-4xl text-center lg:w-2/3'>
                    Unleashing the Next Generation of Card Solutions
                </span>
                <span className='w-1/2 text-center text-[#5A6475] mt-4 mb-8'>
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud
                </span>
                <button className='bg-[#582066] py-2 px-4 text-white flex items-center gap-2 rounded-lg'>
                    Unlock your card{' '}
                    <span class='material-symbols-outlined'>arrow_forward</span>
                </button>
            </div>
            <div className='text-center mt-4 text-[#5A6475]'>
                *No credit card required
            </div>
        </div>
    );
};

export default Hero;
