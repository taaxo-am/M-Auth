import React from 'react';
import avatar from '../../img/avatar.png'
import RatingBar from "../../components/RatingBar";

const Review = () => {
    return (
        <div className='d-flex align-items-start mt-3'>
            <img src={avatar} alt=""/>
            <div className="d-flex flex-column ml-5">
                <p>Yasir Carafaad</p>
                <div className="d-flex flex-column flex-xl-row">
                    <RatingBar />
                    <small className='mt-2 mt-xl-0'>Reviewed in Hargeisa on Dec 2020</small>
                </div>
                <p className='mt-3'>There isn't much to dislike about Canon's SL3 SLR camera. I buy camera bodies often, keep them a year and
                    then often upgrade (I travel for a living).

                    I have yet to find a really good POINT & SHOOT camera to carry for my travels. They always let me down
                    (Canon included) in performance.
                </p>
            </div>
        </div>
    );
};

export default Review;
