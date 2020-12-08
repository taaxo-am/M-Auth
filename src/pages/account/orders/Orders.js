import React from 'react';
import cam from '../../../img/cam.png'
import OrderItem from "./OrderItem";

const Orders = () => {
    return (
        <div className='container mt-5'>
            <h1>Your Orders</h1>
            <div className='d-flex mt-5 text-muted'>
                <h5 className='pb-2 text-dark active'>Orders</h5>
                <h5 className='pb-2 ml-4'>Cancelled Orders</h5>
            </div>

            <div className='mt-4'>
                <div className="form-inline mb-4">
                    <label>Sort by:</label>
                    <select className='form-control w-25 ml-4' value='1'>
                        <option value='1' disabled>Last Week</option>
                    </select>
                </div>

                <div className='container p-1'>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </div>
    );
};

export default Orders;
