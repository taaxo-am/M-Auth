import React from 'react';

const DeliveryAddress = () => {
    return (
        <div className='container-lg vh-100'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                <h3 className='font-weight-bolder text-secondary ml-3'>Edit Your <br/>Delivery Address</h3>
                <form className='d-flex flex-column p-3'>
                    <div className='d-flex'>
                        <div className='form-group'>
                            <label htmlFor='name'>Full Name</label>
                            <input name='name' className='form-control'/>
                        </div>
                        <div className='form-group ml-4'>
                            <label htmlFor='name'>Phone Number</label>
                            <input name='name' className='form-control'/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='form-group'>
                            <label htmlFor='name'>City</label>
                            <input name='name' className='form-control'/>
                        </div>
                        <div className='form-group ml-4'>
                            <label htmlFor='name'>Distinct</label>
                            <input name='name' className='form-control'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Area Trademark</label>
                        <input name='name' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Phone Number</label>
                        <input name='name' className='form-control'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='name'>Delivery Instructions</label>
                        <textarea name='name' className='form-control'/>
                    </div>
                    <input className='btn btn-danger w-50 mt-4 align-self-end' type='submit' value='SAVE CHANGES'/>
                </form>
            </div>
        </div>
    );
};

export default DeliveryAddress;
