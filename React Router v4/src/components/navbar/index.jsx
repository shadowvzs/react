import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/styles.css';

export default function NavBar() {
    return (
    <nav>
        <NavLink exact to={'/'}>Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink exact to={'/products'}>Products</NavLink>
        &nbsp;|&nbsp;
        <NavLink exact to={'/about-us'}>About Us</NavLink>
    </nav>
    )
}