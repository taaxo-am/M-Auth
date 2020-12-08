import React from 'react';
import cam from "../../img/hd-cam.png";
import Review from "./Review";
import RatingBar from "../../components/RatingBar";
import RatingProgressBar from "../../components/RatingProgressBar";

const Reviews = () => {
    return (
        <div className='container-fluid p-5'>
            <div className="row m-0 justify-content-around">
                <div className="col-12 col-md-4 d-flex flex-column">
                    <div className='d-flex flex-column'>
                        <h3>CUSTOMER REVIEWS</h3>
                        <hr className='w-100 '/>
                        <div className="d-flex align-items-center mt-2">
                            <RatingBar/>
                            <span className='underlined'>4.5 out of 5</span>
                        </div>
                        <span className='font-weight-bold text-info underlined mt-2'>1200 Ratings</span>

                        <hr className='w-100'/>
                        <RatingProgressBar starsNum={5} percentage={86}/>
                        <RatingProgressBar starsNum={4} percentage={9}/>
                        <RatingProgressBar starsNum={3} percentage={2}/>
                        <RatingProgressBar starsNum={2} percentage={1}/>
                        <RatingProgressBar starsNum={1} percentage={1}/>
                    </div>


                    <div>
                        <hr className='w-100 mt-5'/>
                        <h3 className='mt-5'>Review This Product</h3>
                        <button className='btn btn-danger w-50 mt-3 pr-md-5 pl-md-5'>Review Now</button>
                    </div>
                </div>
                <div className="col-12 col-md-5 d-flex flex-column mt-md-0 mt-4">
                    <h3>Top Reviews from Our Customers</h3>
                    <hr className='w-100'/>

                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
