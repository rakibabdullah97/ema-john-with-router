import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop" >Shop</NavLink> 
                <NavLink to="/orderreview" >Review</NavLink> 
                <NavLink to="/inventory" >Inventory</NavLink> 
               
            </nav>
        </div>
    );
};

export default Header;