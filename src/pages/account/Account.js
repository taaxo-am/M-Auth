import React from 'react';
import './styles.css'
import packaage from './img/packaage.png'
import login from './img/login.png'
import help from './img/help.png'
import {Link} from "react-router-dom";
import NavItem from "./NavItem";

const Account = () => {
    return (
        <div className='w-100 vh-100 d-flex flex-column align-items-center'>
            <h1 className='m-5'>Your Account</h1>

            <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                <Link to='/orders'>
                    <NavItem img={packaage} title="Your Orders" subtitle="Track, Return or buy things again"/>
                </Link>

                <Link to='/login&security'>
                    <NavItem img={login} title="Login and security" subtitle="Edit login name and phone number"/>
                </Link>

                <Link to='/account'>
                    <NavItem img={help} title="Need help?" subtitle="We are here for you"/>
                </Link>
            </div>
        </div>
    );
};

export default Account;
