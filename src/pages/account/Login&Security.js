import React from 'react';
import user from '../../img/user.png'
import delivery from '../../img/delivery.png'
import {Link} from "react-router-dom";
import NavItem from "./NavItem";

const LoginAndSecurity = () => {
    return (
        <div className='w-100 vh-100 d-flex flex-column align-items-center'>
            <h1 className='m-5'>Login & Security</h1>

            <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                <Link to='/edit-profile'>
                    <NavItem img={user} title="Profile & Password" subtitle="Edit your personal information"/>
                </Link>

                <Link to='/delivery-address'>
                    <NavItem img={delivery} title="Delivery Address" subtitle="Edit your delivery address"/>
                </Link>
            </div>
        </div>
    );
};

export default LoginAndSecurity;
