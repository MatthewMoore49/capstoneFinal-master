import React from 'react';
import Cards from '../Cards';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className = 'home'>
            <div className="jumbotron jumbotron-fluid homehover">
                <div className="homecontainer">
                    <h1>Welcome to Cincinnati</h1>
                </div>
            </div>
            <div className='homeheader'>
                <h1>The Queen City <span className='crown'><i className="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i className="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i className="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
                <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
            </div>
                <div className='blurb'>
                </div>
                <Cards />
        </div>
    )
}


export default Home

