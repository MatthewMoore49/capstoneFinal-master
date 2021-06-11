import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';



const Navbar = () => {
    return (
      <div className="sidenav">
      <h2>Queen City Attractions</h2><br />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/attractions">All Attractions</a></li>
<li className="dropdown">
  <a href="javascript:void(0)" className="dropbtn">Categories</a>
  <div className="dropdown-content">
    <a className='dropdowna' href="/Breweries">Breweries</a>
    <a className='dropdowna' href="/Casinos">Casinos</a>
    <a className='dropdowna' href="/Museums">Museums</a>
    <a className='dropdowna' href="/Music">Music Venues</a>
    <a className='dropdowna' href="/OurFavories">Our Favorites</a>
    <a className='dropdowna' href="/Parks">Parks</a>
    <a className='dropdowna' href="/Restaurants">Restaurants</a>
    <a className='dropdowna' href="/Sports">Sports</a> 
    <a className='dropdowna' href="/Downtown">Visit Downtown</a>
    <a className='dropdowna' href="/Libertycenter">Visit Liberty Center</a>
    <a className='dropdowna' href="/Newport">Visit Newport</a>
    <a className='dropdowna' href="/Otr">Visit OTR</a>
  </div>
</li>

      </ul>
    </div>



    )}

export default Navbar