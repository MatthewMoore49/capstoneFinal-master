import React from 'react';
import {Link} from 'react-router-dom'
import Breweries from './assets/HomeImgs/squares/breweries.png';
import Casinos from './assets/HomeImgs/squares/casino.png';
import Downtown from './assets/HomeImgs/squares/downtown.png';
import Food from './assets/HomeImgs/squares/food.png';
import Liberty from './assets/HomeImgs/squares/libertycenter.png';
import Museums from './assets/HomeImgs/squares/museums.png';
import Music from './assets/HomeImgs/squares/music.png';
import Newport from './assets/HomeImgs/squares/newport.png';
import Others from './assets/HomeImgs/squares/other.png';
import OTR from './assets/HomeImgs/squares/otr.png';
import Parks from './assets/HomeImgs/squares/parks.png';
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
               <div className="imgWithText">
                <div className="gridElements">
                <a href="/Attractions/#Casinos">
                <img src={Casinos} alt="casino"/> 
                    <p className="bottom-left">CASINOS</p>
                </a> 
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                    <a href="/Attractions/#Music">
                    <img src={Music} alt="music"/> 
                    <p className="bottom-left">MUSIC</p>
                    </a> 
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Parks'>
                <img src={Parks} alt="park"/> 
                    <p className="bottom-left">PARKS</p> 
                </a>
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Museums'>
                <img src={Museums} alt="Museums"/> 
                    <p className="bottom-left">MUSEUMS</p> 
                </a>
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                <Link to={{
                    pathname:"/Attractions",
                    hash:"#Restaurants",
                }}
                >
                <img src={Food} alt="food"/> 
                    <p className="bottom-left">FOOD</p> 
                </Link>
                </div>
                </div> <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#OTR'>
                <img src={OTR} alt="OTR"/> 
                    <p className="bottom-left">VISIT OTR</p> 
                </a>
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Breweries'>
                <img src={Breweries} alt="breweries"/> 
                    <p className="bottom-left">BREWERIES</p> 
                </a>
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Favorites'>
                <img src={Others} alt="other"/> 
                    <p className="bottom-left">OUR FAVORITES</p> 
                </a>
                </div>
                </div>  
                   <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Liberty'>
                <img src={Liberty} alt="Liberty Center"/> 
                    <p className="bottom-left">VISIT LIBERTY CENTER</p> 
                </a>
                </div>
                </div>     
                <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Newport'>
                <img src={Newport} alt="Newport"/> 
                    <p className="bottom-left">VISIT NEWPORT</p> 
                </a>
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                <a href='/Attractions/#Downtown'>
                <img src={Downtown} alt="downtown"/> 
                    <p className="bottom-left">VISIT DOWNTOWN</p> 
                </a>
                </div>
                </div>   
            
               
    </div> 
   
    )
}

export default Cards