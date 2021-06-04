import {Container, AppBar, Grow, Grid} from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import FooterHome from './FooterHome';
import Home from './pages/Home';
import About from './pages/About';
import './styles/Main.css';


const App = () => {
  return (

<BrowserRouter>
    <div>
    <Navbar/>
    <Route exact path = '/home' component={Home}/>
    <Route exact path = '/about' component={About}/>
    <FooterHome />
    </div>
    </BrowserRouter>
  );
}
export default App;