  import React from 'react';
  import '../src/styles/Footer.css';
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  import {FaGithub, FaLinkedin, FaUserCircle} from 'react-icons/fa'

  const FooterHome = () => (
  <footer className="container py-5  text-center sticky-bottom" id='footer_background'>
    <div className="row " id='profileContainer'>
     
      <div className="col-6 col-md">
        <h5>Capstone Project</h5>
        <ul className="list-unstyled text-small">
          <li>This project was created by a team of students from Kable Academy's Spring 2021 Web Development Bootcamp</li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Rachel Kleshinski</h5>
        <ul className="list-unstyled text-small" id='footerprofile'>
          <li><a className="link-secondary" href="https://github.com/rachelk920"> <FaGithub size={30} className='footericon'/></a></li>
          <li><a className="link-secondary" href="https://rachelk920.github.io/portfolio/"><FaUserCircle size={30} className='footericon'/></a></li>
          <li><a className="link-secondary" href="https://www.linkedin.com/in/rachel-kleshinski/"><FaLinkedin size={30} className='footericon'/></a></li>
        
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Matt Moore</h5>
        <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="https://github.com/MatthewMoore49"> <FaGithub size={30} className='footericon'/></a></li>
          <li><a className="link-secondary" href="https://matthewmoore49.github.io/portfolio/"><FaUserCircle size={30} className='footericon'/></a></li>
          <li><a className="link-secondary" href="https://www.linkedin.com/in/matthew-m-a3771390/"><FaLinkedin size={30} className='footericon'/></a></li>
        
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Ro Larkins</h5>
        <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="https://github.com/RoLarkins"> <FaGithub size={30} className='footericon'/></a></li>
          <li><a className="link-secondary" href="https://rolarkins.github.io/portfolio/"><FaUserCircle size={30} className='footericon'/></a></li>
          <li><a className="link-secondary" href="https://www.linkedin.com/in/roosevelt-larkins-a57ba4158/"><FaLinkedin size={30} className='footericon'/></a></li>
       
        </ul>
      </div>
    </div>
     <div className="col-12 col-md">
        <small className="d-block mb-3 text-muted">© March 2021 Web Development</small> </div>
  </footer>
  );
  export default FooterHome;
