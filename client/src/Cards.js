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
        <div className="container-fluid" id='cards'>
        <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Sports'>
                <img src={Sports} alt="hockey"/> 
                <p className="bottom-left">SPORTS</p>
                </Link> 
                </div>
                </div>
               <div className="imgWithText">
                <div className="gridElements">
                <Link to="./Casinos">
                <img src={Casinos} alt="casino"/> 
                    <p className="bottom-left">CASINOS</p>
                </Link> 
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                    <Link to="./Music">
                    <img src={Music} alt="music"/> 
                    <p className="bottom-left">MUSIC</p>
                    </Link> 
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Parks'>
                <img src={Parks} alt="park"/> 
                    <p className="bottom-left">PARKS</p> 
                </Link>
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Museums'>
                <img src={Museums} alt="Museums"/> 
                    <p className="bottom-left">MUSEUMS</p> 
                </Link>
                </div>
                </div>
                
                <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Restaurants'>
                <img src={Food} alt="food"/> 
                    <p className="bottom-left">FOOD</p> 
                    </Link>
                </div>
                </div> <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Otr'>
                <img src={OTR} alt="OTR"/> 
                    <p className="bottom-left">VISIT OTR</p> 
                </Link>
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Breweries'>
                <img src={Breweries} alt="breweries"/> 
                    <p className="bottom-left">BREWERIES</p> 
                </Link>
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                <Link to='./OurFavories'>
                <img src={Others} alt="other"/> 
                    <p className="bottom-left">OUR FAVORITES</p> 
                </Link>
                </div>
                </div>  
                   <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Libertycenter'>
                <img src={Liberty} alt="Liberty Center"/> 
                    <p className="bottom-left">VISIT LIBERTY CENTER</p> 
                </Link>
                </div>
                </div>     
                <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Newport'>
                <img src={Newport} alt="Newport"/> 
                    <p className="bottom-left">VISIT NEWPORT</p> 
                </Link>
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                <Link to='./Downtown'>
                <img src={Downtown} alt="downtown"/> 
                    <p className="bottom-left">VISIT DOWNTOWN</p> 
                </Link>
                </div>
                </div>   
    </div> 
    )
}

export default Cards