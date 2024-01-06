import React from 'react';

const FooterList = ({ props }) => {
    return (
        <div className='flex flex-col'>
            <span>{props.heading}</span>
            {props.list.map((item) => {
                return <span>{item}</span>;
            })}
        </div>
    );
};

export default FooterList;
