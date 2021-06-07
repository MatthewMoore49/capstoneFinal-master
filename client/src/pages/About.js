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
          <div class="item" data-aos="fade-up">1</div>
<div class="item" data-aos="fade-down">2</div>
<div class="item" data-aos="fade-right">3</div>
<div class="item" data-aos="fade-left">4</div>

<div class="item" data-aos="zoom-in">5</div>
<div class="item" data-aos="zoom-out">6</div>

<div class="item" data-aos="slide-up">7</div>

<div class="item" data-aos="flip-up">8</div>
<div class="item" data-aos="flip-down">9</div>
<div class="item" data-aos="flip-right">10</div>
<div class="item" data-aos="flip-left">11</div>

          </div>
        </div>
    )
}
 

export default About