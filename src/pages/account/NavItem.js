import React from 'react';

const NavItem = ({img, title, subtitle}) => {
    return (
        <div className='item border rounded p-3 d-flex align-items-center'>
            <img className='w-auto' src={img} alt=""/>
            <div className='d-flex flex-column ml-4'>
                <h6>{title}</h6>
                <small className='text-muted'>{subtitle}</small>
            </div>
        </div>
    );
};

export default NavItem;
