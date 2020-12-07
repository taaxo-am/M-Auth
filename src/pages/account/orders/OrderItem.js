import React from 'react';
import cam from "../img/cam.png";

const OrderItem = () => {
    return (
        <>
            <div className='row mt-4 border rounded bg-light'>
                <div className='col-3 d-flex flex-column align-items-center font-weight-bolder p-2'>
                    <small className='font-weight-bold'>ORDER DATE</small>
                    <small>2020/05/03</small>
                </div>
                <div className='col-3 d-flex flex-column align-items-center font-weight-bolder p-2'>
                    <small className='font-weight-bold'>TOTAL</small>
                    <small>$ 450</small>
                </div>
                <div className='col-3 d-flex flex-column align-items-center font-weight-bolder p-2'>
                    <small className='font-weight-bold'>ORDER STATUS</small>
                    <small className='text-info'>Complete</small>
                </div>
                <div className='col-3 d-flex flex-column align-items-center font-weight-bolder p-2'>
                    <small className='font-weight-bold'>ORDER DETAILS</small>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-3 d-flex flex-column align-items-center font-weight-bolder p-2'>
                    <img src={cam} alt="" className='w-50'/>
                </div>
                <div
                    className='col-3 d-flex flex-column align-items-center justify-content-center font-weight-bolder p-2'>
                    <small className='text-muted text-center'>
                        Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi|24.1 MP CMOS Sensor |DIGIC 4+
                        Image Processor and Full HD Videos
                    </small>
                    <small className='text-danger mt-2 d-block'>$500</small>
                </div>
                <div className='col-3 d-flex flex-column align-items-center font-weight-bolder p-2'>

                </div>
                <div className='col-3 d-flex flex-column align-items-center font-weight-bolder p-2'>
                    <button className='btn btn-danger'>Buy Again</button>
                </div>
            </div>
            <hr className='mt-5'/>
        </>
    );
};

export default OrderItem;
