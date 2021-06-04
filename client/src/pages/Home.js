import React from 'react';
import Cards from '../Cards';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className = 'home'>
            <div className="jumbotron jumbotron-fluid homehover">
                <div className="container">
                    <h1>Welcome to Cincinnati</h1>
                </div>
            </div>
            <div className='header'>
                <h1>The Queen City <span><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
                <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
            </div>
                <div className='blurb'>
                    <p>this is a blurb about cincinnati</p>
                </div>
                <Cards />
        </div>
    )
}


export default Home

