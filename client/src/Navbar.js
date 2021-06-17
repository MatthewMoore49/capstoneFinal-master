import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
      <div className="sidenav">
      <h2>Queen City Attractions</h2><br />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link path to="/Attractions">All Attractions</Link></li>
<li className="dropdown">
  <Link className="dropbtn" >Categories</Link>
  <div className="dropdown-content">
    <Link className='dropdowna' to="/Breweries">Breweries</Link>
    <Link className='dropdowna' to="/Casinos">Casinos</Link>
    <Link className='dropdowna' to="/Museums">Museums</Link>
    <Link className='dropdowna' to="/Music">Music Venues</Link>
    <Link className='dropdowna' to="/OurFavories">Our Favorites</Link>
    <Link className='dropdowna' to="/Parks">Parks</Link>
    <Link className='dropdowna' to="/Restaurants">Restaurants</Link>
    <Link className='dropdowna' to="/Sports">Sports</Link> 
    <Link className='dropdowna' to="/Downtown">Visit Downtown</Link>
    <Link className='dropdowna' to="/Libertycenter">Visit Liberty Center</Link>
    <Link className='dropdowna' to="/Newport">Visit Newport</Link>
    <Link className='dropdowna' to="/Otr">Visit OTR</Link>
  </div>
</li>

      </ul>
    </div>



    )}

export default Navbar