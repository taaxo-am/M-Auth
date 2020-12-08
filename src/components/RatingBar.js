import React from 'react';

const RatingBar = () => {

    return (
        <div className='d-flex'>
            {
                new Array(5).fill(0).map(item => {
                    return <i className="fas fa-star text-danger mr-2"/>
                })
            }
        </div>
    );
};

export default RatingBar;
