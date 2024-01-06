import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col'>
            {/* Header */}
            <div className='flex justify-center gap-4 items-center py-2 border-b border-[#E6E7E9]'>
                <span className='px-2 py-1 bg-[#F1F1F2] border border-[#E6E7E9] rounded-xl text-xs font-medium'>
                    Announcement
                </span>
                <span className='text-[#121417] text-sm font-medium'>
                    We are happy to announce that we raise $2 Million in Seed
                    Funding
                </span>
            </div>
            <div>Header</div>
        </div>
    );
};

export default Header;
