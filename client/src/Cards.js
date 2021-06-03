import React from 'react'
import Sports from './assets/sports.png'

const Cards = () => {
        return (
        <div className="container-fluid">
        <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryView'> */}
                <img src={Sports} alt="hockey"/> 
                <p className="bottom-left">SPORTS</p>
                {/* </a>  */}
                </div>
                </div>
               <div className="imgWithText">
                <div className="gridElements">
                {/* <a href="/categoryPlay"> */}
                <img src={require('./assets/HomeImgs/casino.png')} alt="arcade"/>
                    <p className="bottom-left">CASINOS</p>
                {/* </a>  */}
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                    {/* <a href="/categoryArt"> */}
                    {/* <img src={require('../assets/CAC3.jpg')} alt="CAC"/> */}
                    <p className="bottom-left">MUSIC</p>
                    {/* </a>  */}
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categorySkate'> */}
                {/* <img src={require('../assets/skatepark3.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">PARKS</p> 
                {/* </a> */}
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryLearn'> */}
                {/* <img src={require('../assets/otherMuseum.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">MUSEUMS</p> 
                {/* </a> */}
                </div>
                </div>
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">FOOD</p> 
                {/* </a> */}
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">BREWERIES</p> 
                {/* </a> */}
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">OTHER</p> 
                {/* </a> */}
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">VISIT OTR</p> 
                {/* </a> */}
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">VISIT DOWNTOWN</p> 
                {/* </a> */}
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">VISIT KENWOOD</p> 
                {/* </a> */}
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">VISIT NEWPORT</p> 
                {/* </a> */}
                </div>
                </div>  
                <div className="imgWithText">
                <div className="gridElements">
                {/* <a href='/categoryShop'> */}
                {/* <img src={require('../assets/newport1.jpg')} alt="arcade"/> */}
                    <p className="bottom-left">VISIT LIBERTY CENTER</p> 
                {/* </a> */}
                </div>
                </div>  
    </div> 
   
    )
}

export default Cards