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
        <li><a href="/attractions">All Attractions</a></li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Categories</a>
  <div class="dropdown-content">
    <a href="/Breweries">Breweries</a>
    <a href="/Casinos">Casinos</a>
    <a href="/Museums">Museums</a>
    <a href="/Music">Music Venues</a>
    <a href="/OurFavories">Our Favorites</a>
    <a href="/Parks">Parks</a>
    <a href="/Restaurants">Restaurants</a>
    <a href="/Sports">Sports</a> 
    <a href="/Downtown">Visit Downtown</a>
    <a href="/Libertycenter">Visit Liberty Center</a>
    <a href="/Newport">Visit Newport</a>
    <a href="/Otr">Visit OTR</a>
  </div>
</li>
      </ul>
    </div>



    )}

export default Navbar