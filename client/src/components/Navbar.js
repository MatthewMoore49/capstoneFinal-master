import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className = 'nav'>
        <div className="wrapper">
          <div className="sidebar">
            <h2>Queen City</h2>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/attractions">Attractions</a></li>
              </ul>
          </div>
        </div>
      </div>
    )
}

export default Navbar