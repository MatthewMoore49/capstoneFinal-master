import React from 'react';
import {Link} from 'react-router-dom'
import AOS from 'aos';
import Sports from './assets/HomeImgs/squares/sports.png';

const Cards = () => {
        return (
        <div className="container-fluid">
        <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Sports'>
                <img src={Sports} alt="hockey"/> 
                <p className="bottom-left">SPORTS</p>
                </a> 
                </div>
                </div>