import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';



const Navbar = () => {
    return (
      <div className="sidenav">
        <h2>Queen City Attractions</h2><br />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/attractions">Attractions</a></li>
        </ul>
      </div>


    )}

export default Navbar