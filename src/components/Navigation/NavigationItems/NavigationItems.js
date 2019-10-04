import React from 'react';


import './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className='navigationItems'>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/about">About Us</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;