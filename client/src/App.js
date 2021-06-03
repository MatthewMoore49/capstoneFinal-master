//import all the things (navbar, etc)
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import FooterHome from './FooterHome';
import Home from './pages/Home';
import './styles/Main.css';
import './styles/Home.css';
const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Route exact path = '/home' component={Home}/>
      <h1>PISS WRINKLE</h1>
    <FooterHome />
    </div>
    </BrowserRouter>
  );
}
export default App;