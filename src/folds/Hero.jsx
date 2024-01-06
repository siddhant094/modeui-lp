import React from 'react';
// import './App.css';

const Hero = () => {
    return (
        <div>
            <div className='h-screen flex flex-col justify-center items-center bg-mesh'>
                {/* <img src='/Mesh.png' alt='' srcset='' /> */}
                <span>Seamless experience</span>
                <span>Unleashing the Next Generation of Card Solutions</span>
                <span>
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud
                </span>
                <button>
                    Unlock your Card{' '}
                    <span class='material-symbols-outlined'>arrow_forward</span>
                </button>
            </div>
            <span>*No credit card required</span>
        </div>
    );
};

export default Hero;
