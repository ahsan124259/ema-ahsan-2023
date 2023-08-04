import React from 'react';
import logo from '../../../public/images/logo.svg';
import './header.css';
const Header = () => {
    return (
        <div className='header'>
           <div className='img'>
           <img src={logo} alt="logo"  />
           </div>
           <div>
           <nav>
           <a href="/order">Order</a>
            <a href="/orderReview">Order Review</a>
            <a href="/manageInventory">ManageInventory</a>
            <a href="/logIn">LogIn</a>
           </nav>
           </div>
        </div>
    );
};

export default Header;