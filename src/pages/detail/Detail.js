import React from 'react';
import cam from '../../img/hd-cam.png'
import logo from '../../img/logo.png'
import ProductInfo from "./ProductInfo";
import Reviews from "./Reviews";

const Detail = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="row mt-5 m-0">
                <div
                    className="col-5 col-md-1 d-md-flex d-none flex-column align-items-center">
                    <img src={cam} className='border rounded h-auto w-75' alt=""/>
                    <img src={cam} className='border rounded w-75 mt-2' alt=""/>
                    <img src={cam} className='border rounded w-75 mt-2' alt=""/>
                    <img src={cam} className='border rounded w-75 mt-2' alt=""/>
                    <img src={cam} className='border rounded w-75 mt-2' alt=""/>
                </div>
                <div
                    className="col-12 col-md-4 d-flex flex-column align-items-center">
                    <img src={cam} className='border rounded w-75' alt=""/>
                    <small>Roll over the image to zoom</small>
                    <button className='btn btn-danger mt-5 pr-5 pl-5 btn-lg'>Buy Now</button>
                </div>
                <div className='col-1'/>
                <div className="col-12 mt-5 mt-md-0 col-md-5 d-flex flex-column">
                    <h3>Canon EOS Rebel T7 DSLR Camera</h3>
                    <div className='d-flex align-items-center mt-1 w-100'>
                        <i className="fa fa-star text-warning"/>
                        <i className="fa fa-star text-warning ml-1"/>
                        <i className="fa fa-star ml-1"/>
                        <i className="fa fa-star ml-1"/>
                        <i className="fa fa-star ml-1 mr-4"/>
                        <small style={{textDecoration: 'underline'}}>180 reviews</small>
                    </div>

                    <p className='text-danger font-weight-bold mt-4' style={{fontSize: '18px'}}>$ 250 USD</p>

                    <p className='text-muted mt-4'>Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in
                        Wi-Fi|24.1 MP CMOS Sensor |DIGIC 4+ Image Processor and Full HD Videos</p>

                    <div>
                        <button className='btn btn-danger w-50'>Add to Cart</button>
                        <button className='btn btn-outline-danger ml-4'>Wishlist</button>
                    </div>

                    <ProductInfo />
                </div>
            </div>

            <Reviews />
        </div>
    );
};

export default Detail;
