import React from 'react';
import '../styles/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
  
AOS.init({
    duration: 1200,
  })

const About = () => {
    return (
      <div className = 'home'>
      <div className="jumbotron jumbotron-fluid abouthover">
          <div className="aboutcontainer">
              <h1>Cincinnati (/ˌsɪnsɪˈnæti/ SIN-sih-NAT-ee) </h1>
          </div>
      </div>
      <div className='aboutheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
          <div className='aboutblurb'>
          <div class="item" data-aos="fade-up">Opening Day will shut the city down. As home to the first pro baseball team, we take the sport very seriously</div>
<div class="item" data-aos="fade-down">Our food & beer scene can't be beat - the Taste of Cincinnati is the country's longest running culinary festival</div>
<div class="item" data-aos="fade-right">We are home to the nation's first professional, paid fire department</div>
<div class="item" data-aos="fade-left">Zinzinnati, the country's biggest Oktoberfest takes place here...</div>

<div class="item" data-aos="zoom-in">...and the "Least Metal Moment" of all time happened at Zinzinnati in the early '00s when Mötley Crüe’s Vince Neil led the crowd in the “World’s Largest Chicken Dance” on Fountain Square</div>
<div class="item" data-aos="zoom-out">Two Cincinnatians created the Magic 8-Ball</div>
<div class="item" data-aos="slide-up">The first newspaper printed in the Northwest Territory was published in Cincinnati in 1793 weekly until 1796</div>
<div class="item" data-aos="flip-up">Cincinnati chili is the best chili</div>
<div class="item" data-aos="flip-down">The inventor of the Pringles can is burried here...in a Pringles can</div>
<div class="item" data-aos="flip-right">We have the best zoo in the nation</div>
          </div>
        </div>
    )
}
 

export default About