import React from 'react';
import User from './user.png'

const EditProfile = () => {
    return (
        <div className='row vh-100 m-0'>
            <div className='col-12 col-md-5 d-flex flex-column h-50 align-self-center justify-content-center align-items-md-end align-items-center'>
                <img src={User} className='w-25 border border-secondary rounded-circle' alt=""/>
                <p className='mt-4'>Change your profile photo</p>
            </div>
            <div className='col-12 col-md-5 d-flex flex-column ml-md-4 justify-content-center align-items-md-start align-items-center'>
                <h3 className='font-weight-bolder text-secondary ml-md-4'>EDIT YOUR PERSONAL INFORMATION</h3>
                <form className='d-flex flex-column border-left p-3 pl-5 w-75'>
                    <div className='form-group'>
                        <label htmlFor='name'>Full Name</label>
                        <input name='name' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Phone Number</label>
                        <input name='name' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Email Address</label>
                        <input name='name' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Password</label>
                        <input name='name' className='form-control'/>
                    </div>
                    <input className='btn btn-danger w-50 mt-4 align-self-end' type='submit' value='SAVE CHANGES'/>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
