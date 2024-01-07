import React from 'react';
import Nav from '../components/Nav';

const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center gap-4 items-center lg:py-2 border-b border-[#E6E7E9] max-sm:p-2'>
                <span className='px-2 py-1 bg-[#F1F1F2] border border-[#E6E7E9] rounded-xl text-xs font-medium'>
                    Announcement
                </span>
                <span className='text-[#121417] text-sm font-medium'>
                    We are happy to announce that we raise $2 Million in Seed
                    Funding
                </span>
            </div>
            <div className='flex flex-row items-center justify-between py-3 lg:px-28 max-sm:px-4 border-b border-[#E6E7E9]'>
                {/* <Nav /> */}
                <div>
                    <img src='/ModeUI.svg' alt='logo' />
                </div>
                <div className='flex gap-4'>
                    <span className='text-[#363C46] font-medium max-sm:hidden flex items-center p-2'>
                        Card Access{' '}
                        <span class='material-symbols-outlined'>
                            expand_more
                        </span>
                    </span>
                    <span className='text-[#363C46] font-medium max-sm:hidden p-2'>
                        Banking
                    </span>
                    <span className='text-[#363C46] font-medium max-sm:hidden p-2'>
                        Processing
                    </span>
                    <span className='text-[#363C46] font-medium max-sm:hidden p-2'>
                        About
                    </span>
                    <span className='text-[#363C46] font-medium max-sm:hidden p-2'>
                        Carrier
                    </span>
                    <span className='text-[#363C46] font-medium max-sm:hidden p-2'>
                        Contact
                    </span>
                </div>
                <div className='flex max-sm:items-center'>
                    <button className='bg-[#EEEFEF] text-[#5A6475] font-medium flex items-center gap-2 py-1 px-4 rounded-md'>
                        Login{' '}
                        <span class='material-symbols-outlined'>login</span>
                    </button>
                    <span class='material-symbols-outlined lg:hidden pl-4'>
                        menu
                    </span>
                </div>
            </div>
            {/* <div>Header</div> */}
        </div>
    );
};

export default Header;
